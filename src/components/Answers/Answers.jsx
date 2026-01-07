import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { STEPS } from './steps'
import { makeOptionsLabelMap } from './utils'
import { isValidBirthDate, isValidRuPhone } from './validators'

import { Header, LeftColumn, RightColumn } from './ui'

const Answers = () => {
	const [step, setStep] = useState(1)
	const [isContacts, setIsContacts] = useState(false)

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		getValues,
		trigger,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			military: '',
			birthDate: '',
			health: '',
			spec: '',
			interest: '',
			priority: '',
			fio: '',
			phone: '',
			agree: false,
		},
	})

	const borderProps = {
		strokeWidth: 2,
		dashArray: '2.5 2.5',
		radius: 4,
	}

	const currentStep = useMemo(() => STEPS.find(s => s.id === step), [step])

	const meta = useMemo(() => {
		if (isContacts) {
			return {
				counter: '',
				title: 'Оставьте контакты, что бы специалист связался с вами',
				artemText:
					'Спасибо! На основании ваших ответов мы подготовим для вас индивидуальные условия',
			}
		}
		return currentStep
	}, [isContacts, currentStep])

	const optionsLabelMap = useMemo(() => makeOptionsLabelMap(STEPS), [])

	// watch
	const birthDate = watch('birthDate')
	const fio = watch('fio')
	const phone = watch('phone')
	const agree = watch('agree')
	const pickedValue = watch(currentStep?.field || '')

	const canNextQuiz = useMemo(() => {
		if (!currentStep) return false

		// шаг 2: выбран health + валидная дата
		if (currentStep.id === 2) {
			return Boolean(pickedValue) && isValidBirthDate(birthDate)
		}

		return Boolean(pickedValue)
	}, [currentStep, birthDate, pickedValue])

	// важно: кнопка "Получить условия" активна когда RHF видит валидные значения
	const canSubmit = useMemo(() => {
		return (
			Boolean((fio || '').trim()) && isValidRuPhone(phone) && Boolean(agree)
		)
	}, [fio, phone, agree])

	const goNext = async () => {
		if (isContacts) return

		if (step < 5) {
			// если на шаге 2 — явно триггерим валидацию даты
			if (step === 2) {
				const ok = await trigger('birthDate')
				if (!ok) return
			}

			if (canNextQuiz) setStep(s => s + 1)
			return
		}

		// step === 5
		if (canNextQuiz) setIsContacts(true)
	}

	const goBack = () => {
		if (isContacts) {
			setIsContacts(false)
			return
		}
		if (step > 1) setStep(s => s - 1)
	}

	const pickOption = id => {
		const field = currentStep.field
		setValue(field, id, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		})
	}

	const toggleAgree = async () => {
		const next = !getValues('agree')
		setValue('agree', next, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		})
		await trigger('agree')
	}

	const onSubmit = raw => {
		// id -> label (как просил)
		const data = {
			...raw,
			military: optionsLabelMap.military?.[raw.military] || raw.military,
			health: optionsLabelMap.health?.[raw.health] || raw.health,
			spec: optionsLabelMap.spec?.[raw.spec] || raw.spec,
			interest: optionsLabelMap.interest?.[raw.interest] || raw.interest,
			priority: optionsLabelMap.priority?.[raw.priority] || raw.priority,
		}

		console.log('FORM DATA:', data)
	}

	return (
		<section className='relative pb-5 pt-5 lg:pb-[30px] xl:pb-[40px]'>
			<div className='absolute inset-0 left-1/2 -translate-x-1/2 w-screen bg-[#1d1e21] -z-10' />

			<div className='w-full flex flex-col gap-5 px-2.5 min-[1199px]:px-[20px]'>
				<Header />

				<div className='flex flex-col md:flex-row gap-5'>
					<RightColumn
						artemText={meta.artemText}
						step={step}
						isContacts={isContacts}
						canNextQuiz={canNextQuiz}
						canSubmit={canSubmit}
						isSubmitting={isSubmitting}
						onBack={goBack}
						onNext={goNext}
					/>

					<LeftColumn
						borderProps={borderProps}
						meta={meta}
						isContacts={isContacts}
						currentStep={currentStep}
						pickedValue={pickedValue}
						onPick={pickOption}
						register={register}
						errors={errors}
						agree={agree}
						onToggleAgree={toggleAgree}
						onContactsSubmit={handleSubmit(onSubmit)}
						birthDateValidate={isValidBirthDate}
						phoneValidate={isValidRuPhone}
					/>
				</div>
			</div>
		</section>
	)
}

export default Answers

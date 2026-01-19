import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import BirthDateField from './BirthDateField'
import OptionButton from './OptionButton'

const EASE = [0.42, 0, 0.58, 1]
const DURATION = 0.3

const appear = {
	initial: { opacity: 0, y: 6 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -6 },
}

const listSwap = {
	initial: { opacity: 0, y: 8 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -8 },
}

const QuizContent = ({
	currentStep,
	pickedValue,
	onPick,
	register,
	errors,
	birthDateValidate,
	birthDatePlacement, // 'top' | 'bottom' | 'none'
}) => {
	// ✅ 3 шаг: поле "свой вариант" (завязано на spec)
	const isThirdStep = currentStep?.field === 'spec'

	// ✅ BirthDate показываем везде как раньше, НО НЕ на 3 шаге
	const showBirth = birthDatePlacement !== 'none' && !isThirdStep
	const showBirthTop = birthDatePlacement === 'top'
	const showBirthBottom = birthDatePlacement === 'bottom'

	// ✅ определяем “новые блоки” или “те же, но другие тексты”
	const prevLenRef = useRef(currentStep?.options?.length || 0)
	const len = currentStep?.options?.length || 0
	const lengthChanged = prevLenRef.current !== len

	useEffect(() => {
		prevLenRef.current = len
	}, [len])

	const listKey = `${currentStep.field}-${currentStep.id}`

	return (
		<LayoutGroup id='quiz'>
			<motion.div className='flex flex-col gap-2.5 p-2.5'>
				{/* hidden поля */}
				<input type='hidden' {...register('military', { required: true })} />
				<input type='hidden' {...register('health', { required: true })} />
				<input type='hidden' {...register('spec', { required: true })} />
				<input type='hidden' {...register('interest', { required: true })} />
				<input type='hidden' {...register('priority', { required: true })} />

				{/* ✅ BirthDate TOP (как было, но без перелёта и не на 3 шаге) */}
				{showBirthTop && (
					<motion.div layout transition={{ duration: DURATION, ease: EASE }}>
						<AnimatePresence initial={false} mode='sync'>
							{showBirth && (
								<motion.div
									key={`birthdate-top-${currentStep.id}`}
									layout
									variants={appear}
									initial='initial'
									animate='animate'
									exit='exit'
									transition={{ duration: DURATION, ease: EASE }}
								>
									<BirthDateField
										register={register}
										error={errors.birthDate}
										validate={birthDateValidate}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				)}

				{/* ✅ Список */}
				<motion.div
					layout
					transition={{ duration: DURATION, ease: EASE }}
					style={{ overflow: 'hidden' }}
				>
					{lengthChanged ? (
						<AnimatePresence initial={false} mode='wait'>
							<motion.div
								key={listKey}
								variants={listSwap}
								initial='initial'
								animate='animate'
								exit='exit'
								transition={{ duration: DURATION, ease: EASE }}
								className='flex flex-col gap-2.5'
							>
								{currentStep.options.map(opt => (
									<motion.div
										key={`${currentStep.field}-${opt.id}`}
										layout='position'
										transition={{ duration: DURATION, ease: EASE }}
										style={{ willChange: 'transform' }}
									>
										<OptionButton
											opt={opt}
											checked={pickedValue === opt.id}
											onPick={onPick}
										/>
									</motion.div>
								))}
							</motion.div>
						</AnimatePresence>
					) : (
						<motion.div className='flex flex-col gap-2.5'>
							{currentStep.options.map((opt, idx) => (
								<motion.div
									key={idx}
									layout='position'
									transition={{ duration: DURATION, ease: EASE }}
									style={{ willChange: 'transform' }}
								>
									<OptionButton
										opt={opt}
										checked={pickedValue === opt.id}
										onPick={onPick}
										animateLabel
									/>
								</motion.div>
							))}
						</motion.div>
					)}
				</motion.div>

				{/* ✅ На 3 шаге — поле "Свой вариант" (вместо даты) */}
				{isThirdStep && (
					<motion.div
						layout
						variants={appear}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{ duration: DURATION, ease: EASE }}
					>
						<input
							{...register('customSpec', {
								validate: v => {
									if (pickedValue !== 'custom') return true

									if (!v || v.trim().length === 0) return 'Введите свой вариант'
									if (v.trim().length < 2) return 'Слишком коротко'
									return true
								},
							})}
							placeholder='Свой вариант'
							className='w-full max-[426px]:h-[44px] h-[55px] rounded-[10px] px-4 bg-white text-black outline-none'
							onChange={e => {
								const v = e.target.value

								if (v && v.trim().length > 0) {
									onPick({ id: 'custom' })
								} else {
									onPick(null)
								}
							}}
						/>
						{errors?.customSpec && (
							<p className='text-red-400 max-[426px]:text-[12px] text-[14px] leading-tight mt-1'>
								{errors.customSpec.message}
							</p>
						)}
					</motion.div>
				)}

				{/* ✅ BirthDate BOTTOM (как было, но без перелёта и не на 3 шаге) */}
				{showBirthBottom && (
					<motion.div layout transition={{ duration: DURATION, ease: EASE }}>
						<AnimatePresence initial={false} mode='sync'>
							{showBirth && (
								<motion.div
									key={`birthdate-bottom-${currentStep.id}`}
									layout
									variants={appear}
									initial='initial'
									animate='animate'
									exit='exit'
									transition={{ duration: DURATION, ease: EASE }}
								>
									<BirthDateField
										register={register}
										error={errors.birthDate}
										validate={birthDateValidate}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				)}
			</motion.div>
		</LayoutGroup>
	)
}

export default QuizContent

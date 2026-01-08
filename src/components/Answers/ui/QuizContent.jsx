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
	const showBirth = birthDatePlacement !== 'none'
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

				{/* BirthDate TOP (не трогаю) */}
				{showBirthTop && (
					<motion.div layout transition={{ duration: DURATION, ease: EASE }}>
						<AnimatePresence initial={false} mode='sync'>
							{showBirth && (
								<motion.div
									key='birthdate'
									layoutId='birthdate-field'
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
						// ✅ если реально меняется количество — делаем swap (как раньше), чтобы не было бага высоты
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
						// ✅ если количество то же — НЕ ремоунтим кнопки, чтобы кружки не мигали
						<motion.div className='flex flex-col gap-2.5'>
							{currentStep.options.map((opt, idx) => (
								<motion.div
									key={idx} // 👈 важно: сохраняем “те же” элементы по позициям
									layout='position'
									transition={{ duration: DURATION, ease: EASE }}
									style={{ willChange: 'transform' }}
								>
									<OptionButton
										opt={opt}
										checked={pickedValue === opt.id}
										onPick={onPick}
										animateLabel // 👈 включаем плавную смену текста
									/>
								</motion.div>
							))}
						</motion.div>
					)}
				</motion.div>

				{/* BirthDate BOTTOM (не трогаю) */}
				{showBirthBottom && (
					<motion.div layout transition={{ duration: DURATION, ease: EASE }}>
						<AnimatePresence initial={false} mode='sync'>
							{showBirth && (
								<motion.div
									key='birthdate'
									layoutId='birthdate-field'
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

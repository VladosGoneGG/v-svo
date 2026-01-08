import { AnimatePresence, motion } from 'framer-motion'
import Next from '../../../assets/svg/next.svg?react'

const EASE = [0.42, 0, 0.58, 1]
const DURATION = 0.3

const backBtn = {
	initial: { opacity: 0, scale: 0.96, x: -6 },
	animate: { opacity: 1, scale: 1, x: 0 },
	exit: { opacity: 0, scale: 0.96, x: -6 },
}

const labelSwap = {
	initial: { opacity: 0, y: 6 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -6 },
}

const NavButtons = ({
	step,
	isContacts,
	canNextQuiz,
	canSubmit,
	isSubmitting,
	onBack,
	onNext,
}) => {
	const showBack = step > 1 || isContacts
	const mainDisabled = isContacts ? !canSubmit || isSubmitting : !canNextQuiz

	return (
		<motion.div
			layout
			transition={{ duration: DURATION, ease: EASE }}
			className='flex gap-5'
		>
			<AnimatePresence initial={false}>
				{showBack && (
					<motion.button
						key='back'
						type='button'
						onClick={onBack}
						variants={backBtn}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{ duration: DURATION, ease: EASE }}
						className='h-[62px] w-[78px] bg-[#6b6e76] rounded-[15px] flex items-center justify-center cursor-pointer'
						aria-label='Назад'
					>
						<span className='rotate-180'>
							<Next />
						</span>
					</motion.button>
				)}
			</AnimatePresence>

			{/* Основная кнопка: layout делает плавное сжатие/расширение */}
			<motion.button
				layout
				type={isContacts ? 'submit' : 'button'}
				form={isContacts ? 'contactsForm' : undefined}
				onClick={isContacts ? undefined : onNext}
				disabled={mainDisabled}
				transition={{ duration: DURATION, ease: EASE }}
				className={[
					'w-full h-[62px] bg-contrast/90 hover:bg-contrast text-white rounded-[15px]',
					'font-inter font-semibold text-[18px]',
					'disabled:opacity-50 flex items-center justify-center gap-5 cursor-pointer',
				].join(' ')}
			>
				{/* Плавная смена текста */}
				<AnimatePresence mode='wait' initial={false}>
					<motion.span
						key={isContacts ? 'submit' : 'next'}
						variants={labelSwap}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{ duration: DURATION, ease: EASE }}
						className='inline-flex items-center'
					>
						{isContacts ? 'Получить условия' : 'Далее'}
					</motion.span>
				</AnimatePresence>

				{/* Иконка Next только на "Далее" — появление/исчезновение плавное */}
				<AnimatePresence initial={false}>
					{!isContacts && (
						<motion.span
							key='nextIcon'
							initial={{ opacity: 0, x: -4 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -4 }}
							transition={{ duration: DURATION, ease: EASE }}
							className='inline-flex'
						>
							<Next />
						</motion.span>
					)}
				</AnimatePresence>
			</motion.button>
		</motion.div>
	)
}

export default NavButtons

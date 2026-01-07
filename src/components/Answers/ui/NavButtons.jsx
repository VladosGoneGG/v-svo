import Next from '../../../assets/svg/next.svg?react'

const NavButtons = ({
	step,
	isContacts,
	canNextQuiz,
	canSubmit,
	isSubmitting,
	onBack,
	onNext,
}) => {
	return (
		<div className='flex gap-5'>
			{(step > 1 || isContacts) && (
				<button
					type='button'
					onClick={onBack}
					className='h-[62px] w-[78px] bg-[#6b6e76] rounded-[15px] flex items-center justify-center cursor-pointer'
					aria-label='Назад'
				>
					<span className='rotate-180'>
						<Next />
					</span>
				</button>
			)}

			{isContacts ? (
				<button
					type='submit'
					form='contactsForm'
					disabled={!canSubmit || isSubmitting}
					className='w-full h-[62px] bg-contrast text-white rounded-[15px] font-inter font-semibold text-[18px] disabled:opacity-50 flex items-center justify-center cursor-pointer'
				>
					Получить условия
				</button>
			) : (
				<button
					type='button'
					onClick={onNext}
					disabled={!canNextQuiz}
					className='w-full h-[62px] bg-contrast text-white rounded-[15px] font-inter font-semibold text-[18px] disabled:opacity-50 flex items-center justify-center gap-5 cursor-pointer'
				>
					Далее
					<Next />
				</button>
			)}
		</div>
	)
}

export default NavButtons

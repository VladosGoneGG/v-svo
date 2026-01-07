import ArtemCard from './ArtemCard'
import NavButtons from './NavButtons'

const RightColumn = ({
	artemText,
	step,
	isContacts,
	canNextQuiz,
	canSubmit,
	isSubmitting,
	onBack,
	onNext,
}) => {
	return (
		<div className='order-1 md:order-2 flex w-full md:max-w-[405px] flex-col gap-5'>
			<ArtemCard text={artemText} />

			<NavButtons
				step={step}
				isContacts={isContacts}
				canNextQuiz={canNextQuiz}
				canSubmit={canSubmit}
				isSubmitting={isSubmitting}
				onBack={onBack}
				onNext={onNext}
			/>
		</div>
	)
}

export default RightColumn

import DashedBorder from '../../DashedBorder/DashedBorder'
import ContactsForm from './ContactsForm'
import LeftHeader from './LeftHeader'
import QuizContent from './QuizContent'

const LeftColumn = ({
	meta,
	isContacts,
	currentStep,
	pickedValue,
	onPick,
	register,
	errors,
	agree,
	onToggleAgree,
	onContactsSubmit,
	birthDateValidate,
	phoneValidate,
}) => {
	return (
		<div className='order-2 md:order-1 relative flex flex-col w-full min-w-[414px]'>
			<div className='absolute -inset-[6px] pointer-events-none'>
				<DashedBorder strokeWidth={2} dashArray='10 10' radius={20} />
			</div>

			<LeftHeader counter={meta.counter} title={meta.title} />

			{isContacts ? (
				<ContactsForm
					register={register}
					errors={errors}
					agree={agree}
					onToggleAgree={onToggleAgree}
					onSubmit={onContactsSubmit}
					phoneValidate={phoneValidate}
				/>
			) : (
				<QuizContent
					currentStep={currentStep}
					pickedValue={pickedValue}
					onPick={onPick}
					register={register}
					errors={errors}
					birthDateValidate={birthDateValidate}
					birthDatePlacement={
						currentStep?.id === 2
							? 'top'
							: currentStep?.id === 3
							? 'bottom'
							: 'none'
					}
				/>
			)}
		</div>
	)
}

export default LeftColumn

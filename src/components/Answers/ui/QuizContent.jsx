import BirthDateField from './BirthDateField'
import OptionButton from './OptionButton'

const QuizContent = ({
	currentStep,
	pickedValue,
	onPick,
	register,
	errors,
	birthDateValidate,
	birthDatePlacement, // 'top' | 'bottom' | 'none'
}) => {
	const showBirthTop = birthDatePlacement === 'top'
	const showBirthBottom = birthDatePlacement === 'bottom'

	return (
		<div className='flex flex-col gap-2.5 p-2.5'>
			{showBirthTop && (
				<BirthDateField
					register={register}
					error={errors.birthDate}
					validate={birthDateValidate}
				/>
			)}

			{/* скрытые поля чтобы всё попало в data */}
			<input type='hidden' {...register('military', { required: true })} />
			<input type='hidden' {...register('health', { required: true })} />
			<input type='hidden' {...register('spec', { required: true })} />
			<input type='hidden' {...register('interest', { required: true })} />
			<input type='hidden' {...register('priority', { required: true })} />

			{currentStep.options.map(opt => (
				<OptionButton
					key={opt.id}
					opt={opt}
					checked={pickedValue === opt.id}
					onPick={onPick}
				/>
			))}

			{showBirthBottom && (
				<BirthDateField
					register={register}
					error={errors.birthDate}
					validate={birthDateValidate}
				/>
			)}
		</div>
	)
}

export default QuizContent

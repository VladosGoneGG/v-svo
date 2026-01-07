import AgreeRow from './AgreeRow'

const ContactsForm = ({
	register,
	errors,
	agree,
	onToggleAgree,
	onSubmit,
	phoneValidate, // <- валидатор снаружи
}) => {
	return (
		<form
			id='contactsForm'
			onSubmit={onSubmit}
			className='flex flex-col gap-2.5 p-2.5'
		>
			<input
				{...register('fio', {
					required: true,
					validate: v => String(v || '').trim().length >= 2,
				})}
				placeholder='ФИО'
				className={[
					'w-full h-[54px] rounded-[14px] px-4 bg-white font-inter font-semibold text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-transparent cursor-pointer',
					errors.fio ? '!bg-[#ffe5e5]' : '',
				].join(' ')}
			/>

			<input
				{...register('phone', {
					required: true,
					validate: phoneValidate,
				})}
				placeholder='+7 (000) 000-00-00'
				className={[
					'w-full h-[54px] rounded-[14px] px-4 bg-white font-inter font-semibold text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-transparent cursor-pointer',
					errors.phone ? '!bg-[#ffe5e5]' : '',
				].join(' ')}
			/>

			<AgreeRow agree={agree} onToggle={onToggleAgree} register={register} />
		</form>
	)
}

export default ContactsForm

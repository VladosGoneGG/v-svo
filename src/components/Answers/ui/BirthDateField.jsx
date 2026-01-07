const BirthDateField = ({ register, error, validate }) => {
	return (
		<input
			{...register('birthDate', {
				required: true,
				validate,
			})}
			placeholder='Дата рождения'
			className={[
				'w-full h-[54px] rounded-[14px] px-4 bg-white font-inter font-semibold text-[14px] outline-none cursor-pointer',
				error ? '!bg-[#ffe5e5]' : '',
			].join(' ')}
		/>
	)
}

export default BirthDateField

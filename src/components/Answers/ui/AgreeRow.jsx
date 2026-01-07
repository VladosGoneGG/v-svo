const AgreeRow = ({ agree, onToggle, register }) => {
	return (
		<button
			type='button'
			onClick={onToggle}
			className='mt-2.5 inline-flex items-center justify-center gap-2.5 cursor-pointer group select-none'
		>
			<input
				type='checkbox'
				{...register('agree', { required: true })}
				className='sr-only'
			/>

			<span className='inline-flex items-center gap-2.5 group-hover:[&_.dot]:opacity-50 cursor-pointer'>
				<span className='w-5 h-5 relative cursor-pointer'>
					<span className='absolute inset-0 rounded-full border border-middle-grey' />
					<span
						className={`dot absolute left-[4px] top-[4px] w-3 h-3 rounded-full bg-contrast transition-opacity ${
							agree ? 'opacity-100' : 'opacity-0'
						}`}
					/>
				</span>

				<span className='font-inter font-semibold text-[14px] text-white leading-5 cursor-pointer'>
					Я принимаю{' '}
					<span className='underline underline-offset-2 cursor-pointer'>
						Условия передачи информации
					</span>
				</span>
			</span>
		</button>
	)
}

export default AgreeRow

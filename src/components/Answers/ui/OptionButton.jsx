const OptionButton = ({ opt, checked, onPick }) => {
	return (
		<button
			type='button'
			onClick={() => onPick(opt.id)}
			className='w-full bg-[#d1d3d8] rounded-[14px] p-4 flex gap-2.5 hover:bg-white group cursor-pointer'
		>
			<span className='w-5 h-5 relative shrink-0 cursor-pointer'>
				<span className='absolute inset-0 rounded-full border border-middle-grey' />

				{/* dot */}
				<span
					className={[
						'dot absolute left-[4px] top-[4px] w-3 h-3 rounded-full bg-contrast transition-opacity',
						checked ? 'opacity-100' : 'opacity-0 group-hover:opacity-50',
					].join(' ')}
				/>
			</span>

			<span className='font-inter font-semibold text-[14px] text-[#1d1e21] cursor-pointer'>
				{opt.label}
			</span>
		</button>
	)
}

export default OptionButton

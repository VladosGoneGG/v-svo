const LeftHeader = ({ counter, title }) => {
	return (
		<div className='flex items-center gap-5 text-white font-semibold pl-7.5 pt-2'>
			{counter ? (
				<>
					<p className='text-[14px]'>{counter}</p>
					<span className='w-[5px] h-[5px] bg-checkbox-dot rounded-full' />
				</>
			) : null}

			<p className='text-[18px]'>{title}</p>
		</div>
	)
}

export default LeftHeader

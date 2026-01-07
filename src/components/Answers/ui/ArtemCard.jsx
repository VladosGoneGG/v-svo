import Gerb from '../../../assets/images/gerb.png'

const ArtemCard = ({ text }) => {
	return (
		<div className='flex justify-between bg-[#ebebeb] rounded-t-[20px] rounded-bl-[20px]'>
			<div className='flex w-full flex-col py-2.5 pl-[15px] pr-2.5 gap-2.5'>
				<p className='font-golos font-semibold text-[22px]'>Артем</p>
				<p className='font-golos text-[16px]'>{text}</p>
			</div>

			<div className='w-[95px] h-[95px] my-2.5 mr-2.5 bg-white rounded-[10px] flex items-center justify-center shrink-0'>
				<img
					src={Gerb}
					alt='Герб'
					className='max-w-full max-h-full object-contain'
				/>
			</div>
		</div>
	)
}

export default ArtemCard

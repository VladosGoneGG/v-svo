import { AnimatePresence, motion } from 'framer-motion'
import Gerb from '../../../assets/images/gerb.png'

const EASE = [0.42, 0, 0.58, 1]
const DURATION = 0.3

const swap = {
	initial: { opacity: 0, y: 6 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -6 },
}

const ArtemCard = ({ text }) => {
	return (
		<div className='flex justify-between bg-[#ebebeb] rounded-t-[20px] rounded-bl-[20px]'>
			<div className='flex w-full flex-col py-2.5 pl-[15px] pr-2.5 gap-2.5'>
				<p className='font-golos font-semibold text-[22px]'>Артем</p>

				{/* ✅ Плавная смена текста + плавная высота */}
				<motion.div layout transition={{ duration: DURATION, ease: EASE }}>
					<AnimatePresence mode='wait' initial={false}>
						<motion.p
							key={text}
							layout
							variants={swap}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{ duration: DURATION, ease: EASE }}
							className='font-golos text-[16px]'
						>
							{text}
						</motion.p>
					</AnimatePresence>
				</motion.div>
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

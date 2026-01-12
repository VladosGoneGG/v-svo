import Fullbleed from '../Fullbleed/Fullbleed'

/**
 * data пример:
 * {
 *   title: 'Блок статьи 1 - Заголовок',
 *   text: '...',
 *   note: '...', // опционально
 * }
 *
 * bgClassName пример: 'bg-white', 'bg-[#f5f5f5]', 'bg-contrast/10'
 */
const Blogsection = ({ data, bgClassName = 'bg-white' }) => {
	if (!data) return null

	const { title, text, note } = data

	return (
		<section className='relative py-5 lg:py-[30px] xl:py-[40px] '>
			<Fullbleed className={bgClassName} />

			<div className='w-full flex flex-col gap-5 lg:gap-7.5 px-2.5 min-[1199px]:px-[20px]'>
				<h2
					className='
            w-full font-golos font-semibold
            text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]
            text-contrast
          '
				>
					{title}
				</h2>

				<div className='w-full flex flex-col gap-5 font-golos'>
					<p className='text-[16px] lg:text-[21px] font-normal'>{text}</p>

					{note ? (
						<div className='flex flex-col'>
							<p className='text-[16px] lg:text-[21px] text-[#797c85]'>
								{note}
							</p>
						</div>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default Blogsection

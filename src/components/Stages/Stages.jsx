import StIcon1 from '../../assets/svg/st-1.svg?react'
import StIcon2 from '../../assets/svg/st-2.svg?react'
import StIcon3 from '../../assets/svg/st-3.svg?react'
import StIcon4 from '../../assets/svg/st-4.svg?react'
import StIcon5 from '../../assets/svg/st-5.svg?react'

const Stages = () => {
	return (
		<section className='flex flex-col justify-center items-start mb-5 lg:mb-[30px] xl:mb-[40px] pt-5'>
			<div className='w-full px-2.5 max-w-[405px] max-[766px]:max-w-none md:max-w-none'>
				<div className='w-full max-w-[405px] max-[766px]:max-w-none md:max-w-none'>
					<h2 className='w-full max-w-[365px] max-[766px]:max-w-none font-inter font-semibold text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px] md:max-w-none'>
						Этапы заключения контракта
					</h2>
				</div>

				<div className='w-full flex justify-center items-center mt-5 lg:mt-7.5'>
					<ul className='flex flex-col md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-2.5 lg:grid-cols-3 font-golos'>
						{/* 1 */}
						<li className='flex p-2.5 lg:p-5 lg:pl-7.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px]'>
							<div className='flex w-full max-w-[300px] min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] font-semibold'>Оставьте заявку</p>
								<p className='text-[14px] font-medium'>
									Оставьте заявку заранее, чтобы мы проверили вашу годность,
									подготовили необходимые документы и предоставили актуальную
									информацию о службе по контракту
								</p>
							</div>
							<div className='flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon1 />
								<p className='text-[18px] font-semibold'>01</p>
							</div>
						</li>

						{/* 2 */}
						<li className='flex p-2.5 lg:p-5 lg:pl-7.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px]'>
							<div className='flex w-full max-w-[300px] min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] font-semibold'>Консультация</p>
								<p className='text-[14px] font-medium'>
									Куратор ответит на ваши вопросы, разъяснит условия службы,
									выплаты, требования ВВК и поможет выбрать подходящее
									направление. С этого момента вы будете сопровождаться на
									каждом этапе оформления
								</p>
							</div>
							<div className='flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon2 />
								<p className='text-[18px] font-semibold'>02</p>
							</div>
						</li>

						{/* 3 */}
						<li className='flex p-2.5 lg:p-5 lg:pl-7.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px] lg:col-start-1 lg:row-start-2'>
							<div className='flex w-full max-w-[300px] min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] font-semibold'>Подготовка и выезд</p>
								<p className='text-[14px] font-medium'>
									Мы согласуем удобную дату прибытия, проконсультируем по
									билетам и маршруту, а также поможем с организационными
									вопросами для приезжих.
								</p>
							</div>
							<div className='flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon3 />
								<p className='text-[18px] font-semibold'>03</p>
							</div>
						</li>

						{/* 4 */}
						<li className='flex p-2.5 lg:p-5 lg:pl-7.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px] lg:col-start-2 lg:row-start-2'>
							<div className='flex w-full max-w-[300px] min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] font-semibold'>
									Оформление и подписание контракта
								</p>
								<p className='text-[14px] font-medium'>
									В течение 1–2 дней вы пройдете оформление документов и
									подпишете контракт
								</p>
							</div>
							<div className='flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon4 />
								<p className='text-[18px] font-semibold'>04</p>
							</div>
						</li>

						{/* ПРАВАЯ КОЛОНКА: 5 + 6 (отдельный поток, НЕ тянет другие) */}
						<li className='hidden lg:block lg:col-start-3 lg:row-start-1 lg:row-span-2'>
							<div className='flex flex-col gap-2.5 h-full'>
								{/* 5 */}
								<div className='flex p-2.5 lg:p-5 lg:pl-7.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px] lg:min-h-[312px]'>
									<div className='flex w-full flex-col gap-2.5'>
										<p className='text-[20px] font-semibold'>Начало службы</p>
										<p className='text-[14px] font-medium'>
											После оформления вам выдадут экипировку, проведут обучение
											и направят в выбранную часть. Сопровождение сохраняется на
											всех этапах, включая период адаптации
										</p>
									</div>
									<div className='flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
										<StIcon5 />
										<p className='text-[18px] font-semibold'>05</p>
									</div>
								</div>

								{/* 6 */}
								<div className='flex p-2.5 lg:p-5 lg:pl-7.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px]'>
									<div className='flex w-full flex-col gap-2.5'>
										<p className='text-[20px] font-semibold'>
											Мы сопровождаем кандидата от первого обращения до начала
											службы
										</p>
										<p className='text-[14px] font-medium'>
											— разъясняем требования, помогаем подготовиться и
											контролируем все этапы оформления
										</p>
									</div>
								</div>
							</div>
						</li>

						{/* 5 и 6 для md / sm */}
						<li className='flex p-2.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px] lg:hidden'>
							<div className='flex gap-2.5 md:bg-[#ebebeb] rounded-[20px]'>
								<div className='flex w-full flex-col gap-2.5'>
									<p className='text-[20px] font-semibold'>Начало службы</p>
									<p className='text-[14px] font-medium'>
										После оформления вам выдадут экипировку, проведут обучение и
										направят в выбранную часть. Сопровождение сохраняется на
										всех этапах, включая период адаптации
									</p>
								</div>
								<div className='flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
									<StIcon5 />
									<p className='text-[18px] font-semibold'>05</p>
								</div>
							</div>
						</li>
						<li className='flex p-2.5 gap-2.5 md:bg-[#ebebeb] rounded-[20px] lg:hidden'>
							<div className='flex gap-2.5 md:bg-[#ebebeb] rounded-[20px]'>
								<div className='flex w-full flex-col gap-2.5'>
									<p className='text-[20px] font-semibold'>
										Мы сопровождаем кандидата от первого обращения до начала
										службы
									</p>
									<p className='text-[14px] font-medium'>
										— разъясняем требования, помогаем подготовиться и
										контролируем все этапы оформления
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Stages

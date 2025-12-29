const Requirements = () => {
	return (
		<section className='flex flex-col justify-center items-start mb-5 lg:mb-[30px] xl:mb-[40px] pt-5 '>
			<div className='flex flex-col justify-center items-start sm:items-center  px-2.5 lg:px-5 md:flex-row w-full   md:gap-10'>
				<div className='flex w-full md:min-h-[634px]  flex-col justify-start   gap-5 md:justify-between lg:max-w-[405px] xl:max-w-[548px] '>
					<h2 className='w-full  font-golos font-semibold text-[20px] md:text-[24px] md:max-w-[350px] lg:text-[30px] xl:text-[40px] xl:max-w-[508px]  '>
						Требования и условия для службы по контракту
					</h2>
					<p className='w-full  font-golos font-normal text-[14px] md:text-[16px] md:max-w-[350px] lg:text-[21px] xl:max-w-[508px] '>
						Мы заранее проверим вашу годность, условия ВВК и подскажем, какие
						документы нужны для допуска к контракту. Консультация бесплатная
					</p>
					<div className='w-full   flex flex-col gap-5 '>
						<div className='flex  flex-row gap-4.5 items-start xl:gap-0 xl:justify-end '>
							<div className='flex w-full flex-col  gap-2.5 max-w-[200px]  xl:max-w-[350px]'>
								<p className='font-golos font-semibold text-[22px] '>
									Цукан Артем
								</p>
								<p className='w-[200px] xl:w-full font-golos font-normal text-[16px]'>
									Оставьте заявку для консультации о{' '}
									<br className='hidden xl:block' /> вашей годности к
									контрактной службе
								</p>
							</div>
							<div
								className='w-[95px] h-[95px] mt-1.5								
								bg-white rounded-[10px]
								flex items-center justify-center
							'
								aria-label='Фото Цукан Артем'
							>
								{/* img сюда */}
							</div>
						</div>
						<button className='w-full sm:max-w-[310px] h-[62px] flex items-center justify-center px-7.5 bg-contrast text-white shadow-btn rounded-[10px] font-inter font-semibold text-[18px] cursor-pointer xl:ml-auto'>
							Задать вопрос
						</button>
					</div>
				</div>
				<div className='flex w-full md:min-h-[634px]  mt-5 md:mt-0 '>
					<div className='flex  flex-col gap-7 md:justify-between'>
						{/* 01 */}
						<div className='flex items-start gap-4'>
							<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
								<span className='font-inter font-semibold text-white text-[14px]'>
									01
								</span>
							</div>

							<div className='flex w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[615px] flex-col gap-2.5'>
								<p className='font-golos font-semibold text-[20px] text-contrast'>
									Возраст
								</p>
								<p className='font-golos font-medium text-[14px] text-[#222] leading-5'>
									От 18 до 63 лет включительно. <br /> Образование — не ниже 9
									класса. <br />
									Преимущество имеют кандидаты с опытом службы или профильной
									подготовкой
								</p>
							</div>
						</div>

						{/* 02 */}
						<div className='flex items-start gap-4'>
							<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
								<span className='font-inter font-semibold text-white text-[14px]'>
									02
								</span>
							</div>

							<div className='flex w-full max-w-[320px] sm:max-w-[500px] md:max-w-none flex-col gap-2.5'>
								<p className='font-golos font-semibold text-[20px] text-contrast'>
									Гражданство
								</p>
								<p className='font-golos  font-medium text-[14px] text-[#222] leading-5'>
									Граждане Российской Федерации, а также иностранные граждане,{' '}
									<br />
									имеющие необходимые документы
								</p>
							</div>
						</div>

						{/* 03 */}
						<div className='flex items-start gap-4'>
							<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
								<span className='font-inter font-semibold text-white text-[14px]'>
									03
								</span>
							</div>

							<div className='flex w-full max-w-[320px] sm:max-w-[500px] md:max-w-none flex-col gap-2.5'>
								<p className='font-golos font-semibold text-[20px] text-contrast'>
									Отсутствие судимости по статьям
								</p>
								<p className='font-golos  font-medium text-[14px] text-[#222] leading-5'>
									Кандидат не должен иметь непогашенной судимости по тяжким и{' '}
									<br />
									особо тяжким статьям. <br /> Проверка проводится официально по
									базам МВД
								</p>
							</div>
						</div>

						{/* 04 */}
						<div className='flex items-start gap-4'>
							<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
								<span className='font-inter font-semibold text-white text-[14px]'>
									04
								</span>
							</div>

							<div className='flex w-full max-w-[320px] sm:max-w-[500px] md:max-w-none flex-col gap-2.5'>
								<p className='font-golos font-semibold text-[20px] text-contrast'>
									Категория здоровья
								</p>
								<p className='font-golos  font-medium text-[14px] text-[#222] leading-5'>
									Категория годности A, Б или В по итогам военно-врачебной{' '}
									<br />
									комиссии. <br /> Отсутствие противопоказаний, препятствующих
									службе
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Requirements

const Equipment = () => {
	return (
		<section className='relative flex flex-col items-start pb-5 lg:pb-[30px] xl:pb-[40px] pt-5'>
			<div className='absolute inset-0 bg-[#797c85] -left-[50vw] left-1/2 -translate-x-1/2 w-screen -z-10' />
			<div className='w-full max-w-[355px] sm:max-w-[550px] md:max-w-[900px]  flex flex-col font-golos px-[20px] lg:max-w-[550px]'>
				<h3 className='w-full font-semibold text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]'>
					Получите современную экипировку от Министерства обороны
				</h3>

				<p className='text-[18px] md:text-[22px] xl:text-[35px]'>
					— всё необходимое для службы и выполнения задач
				</p>
			</div>

			<div className='w-full px-5 min-[1199px]:px-[20px]'>
				<div
					className='
						flex flex-col md:flex-row
						gap-5 md:gap-10
						items-stretch md:items-end
					'
				>
					{/* левая колонка — текст */}
					<div className='flex-1 min-w-0 '>
						<div className='flex font-inter flex-col gap-5 mt-5   text-[14px] md:text-[16px] lg:text-[21px] xl:mt-[30px]'>
							<div>
								<p className=' font-semibold'>Одежда и костюмы:</p>
								<ul className='font-golos font-normal pl-7 mt-2.5  list-disc '>
									<li>Экипировка по сезону</li>
									<li>Демисезонный тактический костюм</li>
									<li>Тёплая тактическая кофта (флис)</li>
									<li>Термобельё</li>
								</ul>
							</div>

							<div>
								<p className='font-semibold'>Обувь и защита:</p>
								<ul className='font-golos font-normal pl-7 mt-2.5  list-disc '>
									<li>Тактические ботинки</li>
									<li>Спецперчатки</li>
									<li>Коврик термоизоляционный</li>
								</ul>
							</div>

							<div>
								<p className='font-semibold'>Спальное снаряжение:</p>
								<ul className='font-golos font-normal pl-7 mt-2.5  list-disc '>
									<li>Спальный мешок</li>
									<li>Непромокаемый вещмешок</li>
								</ul>
							</div>

							<div>
								<p className='font-semibold'>Предметы личного пользования:</p>
								<ul className='font-golos font-normal pl-7 mt-2.5  list-disc '>
									<li>Набор в подсумке / средства личной гигиены</li>
								</ul>
							</div>

							<div>
								<p className='font-semibold'>Медицинское обеспечение:</p>
								<ul className='font-golos font-normal pl-7 mt-2.5  list-disc '>
									<li>Тактическая медицинская аптечка в сборе</li>
								</ul>
							</div>

							<p className='font-golos font-semibold'>
								Вся экипировка — новая, соответствует установленным нормам
								обеспечения и предоставляется бесплатно государством
							</p>
						</div>
					</div>

					{/* правая колонка — изображение */}
					<div className='w-full max-md:px-2.5 flex-1 min-w-0 flex md:justify-end'>
						<div
							className='
								w-full
								md:w-[434px] md:max-w-[434px]
								xl:w-[534px] xl:max-w-[534px]
								h-[385px] lg:h-[434px] xl:h-[534px]
								bg-white rounded-[20px]
								flex items-center justify-center
							'
							aria-label='Изображение экипировки'
						>
							{/* img сюда */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Equipment

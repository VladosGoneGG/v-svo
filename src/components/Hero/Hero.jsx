import Heroicons from '../Heroicons/Heroicons'
import stylesCss from './Hero.module.css'

const Hero = () => {
	return (
		<section className='mt-4 px-2.5 lg:px-5'>
			<div
				className={[
					stylesCss.heroBg,
					// карточка
					'relative mx-auto w-full overflow-hidden rounded-[30px]',
					'w-full  md:max-w-[1200px]',
					// нужная высота на средних экранах
					'min-h-[clamp(420px,55vw,620px)]',
					// ✅ ВАЖНО: делаем контейнер flex, чтобы управлять вертикалью контента
					'flex',
					// паддинги плавно
					'px-[clamp(20px,3vw,44px)] py-[clamp(20px,3.2vw,48px)]',
					'text-white',
				].join(' ')}
			>
				{/* ✅ ВАЖНО: этот блок растягивается по высоте hero */}
				<div className='relative z-10 flex w-full'>
					{/* ✅ ВАЖНО: на больших экранах центрируем по вертикали (без скачков) */}
					<div className='flex w-full  items-end md:items-center'>
						{/* Левый контент */}
						<div className='w-full max-w-[350px] min-[550px]:max-w-[500px] md:max-w-[550px] xl:max-w-[650px] flex flex-col '>
							<div className='font-golos pb-[15px] min-[425px]:pb-[10px] xl:pb-[25px] min-[559px]:pb-[50px] '>
								<h1 className='font-semibold  text-[20px]  md:text-[24px] lg:text-[30px] xl:text-[45px] '>
									Оформление контракта на СВО
								</h1>

								<p className='mt-[clamp(6px,1vw,10px)] font-normal text-[18px] md:text-[22px] lg:text-[26px] xl:text-[35px] '>
									официальное сопровождение и выплаты до 7 000 000 руб.
								</p>
							</div>

							<div className='flex flex-col gap-2.5 min-[375px]:gap-5 font-golos  text-[14px] md:text-[16px] min-[426px]:mb-2.5 lg:text-[21px]'>
								<p>
									Поможем пройти ВВК, подготовим документы и сопроводим до
									пункта подписания.
								</p>
								<p>
									Единовременная выплата до 3 000 000 руб. и ежемесячное
									довольствие от 210 000 руб.
								</p>
								<p>
									Работаем официально. Все условия - по приказам и
									постановлениям Минобороны РФ
								</p>
							</div>

							<button
								className={[
									// мобилка: во всю ширину
									'w-full',
									// ширина кнопки плавная
									'md:max-w-[450px]',
									'h-[37px] md:h-[62px]',
									'rounded-[10px]',
									'bg-contrast shadow-btn',
									'text-[14px] md:text-[18px] font-inter font-semibold',
									'cursor-pointer',
									'mt-[clamp(20px,1.2vw,14px)] min-[960px]:mt-[50px]',
									'px-4 sm:px-6 xl:mt-[20px]',
								].join(' ')}
							>
								Записаться на оформление контракта
							</button>
						</div>
					</div>
				</div>
			</div>

			<Heroicons />
		</section>
	)
}

export default Hero

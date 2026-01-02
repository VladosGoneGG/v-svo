const BUTTONS = [{ label: 'Военнослужащим' }, { label: 'Семьям' }]

const BENEFITS = [
	{
		title: 'Статус ветерана боевых действий',
		text: 'Предоставляется после выполнения условий участия. Дает расширенный перечень льгот, включая надбавки к денежному довольствию, налоговые послабления и социальные гарантии',
	},
	{
		title: 'Отсрочка по аренде жилья и имуществу',
		text: 'На период службы и дополнительно 90 дней после ее завершения. В отдельных случаях срок отсрочки может быть продлен при прохождении лечения',
	},
	{
		title: 'Оплачиваемый отпуск',
		text: 'Двухнедельный оплачиваемый отпуск не реже одного раза в полгода, а также ежегодный дополнительный отпуск 15 суток',
	},
	{
		title: 'Кредитные и налоговые каникулы',
		text: 'Предоставляются на срок службы + 30 дней. Включают приостановку выплат по кредитам и льготный порядок налогообложения согласно федеральным мерам поддержки',
	},
	{
		title: 'Бесплатное лечение и санаторно-курортная терапия',
		text: 'Бесплатное обследование, лечение, реабилитация и санаторные программы. Для членов семьи — скидка до 50% на путевки',
	},
	{
		title: 'Военная пенсия с повышающим коэффициентом',
		text: 'Год службы в зоне СВО засчитывается с коэффициентом 1.5. Боевые выплаты и надбавки ускоряют назначение пенсии и увеличивают ее размер',
	},
	{
		title: 'Страхование жизни и здоровья',
		text: 'Государственное страхование за счет федерального бюджета, включая выплаты при травмах, ранениях или иных страховых случаях',
	},
	{
		title: 'Накопительно-ипотечная система (НИС)',
		text: 'Возможность приобрести жильё за счёт средств Минобороны через НИС после трёх лет службы',
	},
	{
		title: 'Психологическая поддержка',
		text: 'Бесплатная квалифицированная помощь для восстановления эмоционального состояния во время службы и после возвращения',
		liClass: 'md:col-span-2 lg:col-span-1',
	},
]

const btnCls =
	'flex-1 min-w-0 h-[37px] lg:h-[49px] ' +
	'flex items-center justify-center ' +
	'px-7.5 ' +
	'bg-contrast text-white ' +
	'shadow-btn rounded-[10px] ' +
	'font-inter font-semibold max-[325px]:text-[12px] text-[14px] lg:text-[16px] ' +
	'cursor-pointer'

const liCls = 'flex gap-5'
const numWrapCls =
	'flex items-center justify-center w-[45px] h-[45px] min-w-[45px] rounded-full bg-[#797c85] flex-shrink-0'
const titleCls = 'font-golos font-semibold text-contrast text-[20px]'
const textCls = 'font-golos font-medium text-black text-[14px]'

const Benifits = () => {
	return (
		<section className='flex flex-col items-center mb-5 lg:mb-[30px] xl:mb-[40px] pt-5 '>
			<div className='flex flex-col gap-5 w-full px-2.5  min-[1199px]:px-[20px]'>
				<div className='w-full max-w-[405px] max-[766px]:max-w-none  md:max-w-none'>
					<h2 className='w-full text-contrast max-w-[365px] max-[766px]:max-w-none font-inter font-semibold text-[20px] md:text-[24px] px-5 lg:text-[30px] xl:text-[40px]  md:max-w-none'>
						Льготы и гарантии участникам СВО от государства
					</h2>
				</div>

				<div className='flex w-full p-2.5 gap-2.5 justify-center items-center border-2 border-dashed border-[#797c85] rounded-[20px]'>
					{BUTTONS.map(b => (
						<button key={b.label} className={btnCls}>
							{b.label}
						</button>
					))}
				</div>

				<div className='w-full h-[1px] rounded-[1px] bg-[#797c85]'></div>

				<ul className='w-full flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-5 md:min-h-[737px] lg:grid-cols-3 lg:min-h-[559px]'>
					{BENEFITS.map((b, idx) => {
						const num = String(idx + 1).padStart(2, '0')
						return (
							<li key={b.title} className={`${liCls} ${b.liClass ?? ''}`}>
								<div className={numWrapCls}>
									<span className='font-inter font-semibold text-[16px] text-white'>
										{num}
									</span>
								</div>

								<div className='flex flex-col gap-2.5'>
									<p className={titleCls}>{b.title}</p>
									<p className={textCls}>{b.text}</p>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Benifits

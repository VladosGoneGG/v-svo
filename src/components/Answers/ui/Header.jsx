const Header = () => {
	return (
		<div className='flex font-golos flex-col mb-2.5'>
			<h2 className='font-semibold text-white text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]'>
				<span className='text-contrast'>Ответьте на 5 вопросов </span>— мы
				подберем подходящие войска, выплаты и условия контракта
			</h2>

			<p className='text-[20px] text-middle-grey'>
				Ответы никуда не передаются и используются только для подбора
			</p>
		</div>
	)
}

export default Header

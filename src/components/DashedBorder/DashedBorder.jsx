const DashedBorder = ({
	className = '',
	stroke = '#D14E15',
	strokeWidth = 2,
	dashArray = '3 3',
	radius = 10,
	inset = 1,
}) => {
	// Радиус в координатах viewBox (0..100).
	// Твой path построен на "углах" с радиусом ~10 => M 11 / Q ... 11
	const r = Math.max(0, Math.min(40, Number(radius) || 10))
	const i = Math.max(0, Math.min(10, Number(inset) || 1))

	// Строим path динамически, чтобы радиус можно было менять,
	// и чтобы оно одинаково выглядело на широких карточках.
	// Внутренняя рамка: от i до (100 - i)
	const min = i
	const max = 100 - i
	const rMin = min + r
	const rMax = max - r

	const d = `
		M ${rMin} ${min}
		H ${rMax}
		Q ${max} ${min} ${max} ${rMin}
		V ${rMax}
		Q ${max} ${max} ${rMax} ${max}
		H ${rMin}
		Q ${min} ${max} ${min} ${rMax}
		V ${rMin}
		Q ${min} ${min} ${rMin} ${min}
		Z
	`

	return (
		<svg
			className={[
				'pointer-events-none absolute inset-0 h-full w-full z-0',
				className,
			].join(' ')}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
			preserveAspectRatio='none'
			fill='none'
			aria-hidden='true'
		>
			<path
				d={d}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeDasharray={dashArray}
				strokeLinecap='round'
				strokeLinejoin='round'
				vectorEffect='non-scaling-stroke'
				pathLength='100'
				shapeRendering='geometricPrecision'
			/>
		</svg>
	)
}

export default DashedBorder

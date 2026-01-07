export const makeOptionsLabelMap = steps => {
	const map = {}

	for (const step of steps) {
		const perStep = {}
		for (const opt of step.options) {
			perStep[opt.id] = opt.label
		}
		map[step.field] = perStep
	}

	return map
}

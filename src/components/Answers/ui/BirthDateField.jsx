const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

const formatDateInstantDots = raw => {
	const digits = raw.replace(/\D/g, '').slice(0, 8)

	let d = digits.slice(0, 2)
	let m = digits.slice(2, 4)
	let y = digits.slice(4, 8)

	// ВАЖНО: чтобы не ломать ввод, clamp делаем только когда блок целиком набран
	if (d.length === 2) {
		d = String(clamp(parseInt(d, 10) || 1, 1, 31)).padStart(2, '0')
	}
	if (m.length === 2) {
		m = String(clamp(parseInt(m, 10) || 1, 1, 12)).padStart(2, '0')
	}

	let out = ''
	if (d) {
		out += d
		if (d.length === 2) out += '.'
	}
	if (m) {
		out += m
		if (m.length === 2) out += '.'
	}
	if (y) out += y

	return out
}

const countDigits = s => (s.match(/\d/g) || []).length

const caretPosFromDigits = (formatted, digitCount) => {
	if (digitCount <= 0) return 0
	let seen = 0
	for (let i = 0; i < formatted.length; i++) {
		if (/\d/.test(formatted[i])) seen++
		if (seen === digitCount) return i + 1
	}
	return formatted.length
}

const BirthDateField = ({ register, error }) => {
	const setCaret = (el, pos) => {
		requestAnimationFrame(() => el.setSelectionRange(pos, pos))
	}

	const applyFormatKeepCaret = el => {
		const oldVal = el.value
		const oldPos = el.selectionStart ?? oldVal.length

		const digitsBefore = countDigits(oldVal.slice(0, oldPos))
		const formatted = formatDateInstantDots(oldVal)

		el.value = formatted
		const newPos = caretPosFromDigits(formatted, digitsBefore)
		setCaret(el, newPos)
	}

	const handleKeyDown = e => {
		const el = e.target
		const v = el.value
		const pos = el.selectionStart ?? 0

		// Backspace на точке: удаляем цифру слева от точки
		if (e.key === 'Backspace' && pos > 0 && v[pos - 1] === '.') {
			e.preventDefault()

			const digitsBefore = countDigits(v.slice(0, pos)) // сколько цифр слева от каретки
			const newRaw = v.slice(0, Math.max(0, pos - 2)) + v.slice(pos)

			const formatted = formatDateInstantDots(newRaw)
			el.value = formatted

			const desiredDigits = Math.max(0, digitsBefore - 1) // одну цифру удалили
			const newPos = caretPosFromDigits(formatted, desiredDigits)
			setCaret(el, newPos)
		}

		// Delete на точке: удаляем цифру справа от точки
		if (e.key === 'Delete' && pos < v.length && v[pos] === '.') {
			e.preventDefault()

			const digitsBefore = countDigits(v.slice(0, pos))
			const newRaw = v.slice(0, pos) + v.slice(pos + 2)

			const formatted = formatDateInstantDots(newRaw)
			el.value = formatted

			const newPos = caretPosFromDigits(formatted, digitsBefore)
			setCaret(el, newPos)
		}
	}

	const handleChange = e => {
		applyFormatKeepCaret(e.target)
	}

	return (
		<input
			{...register('birthDate', {
				required: true,
				onChange: handleChange,
				// validate: validateBirthDate, // оставь свою валидацию как была
			})}
			onKeyDown={handleKeyDown}
			placeholder='Дата рождения'
			inputMode='numeric'
			maxLength={10}
			className={[
				'w-full max-[426px]:h-[44px] h-[54px] rounded-[14px] px-4 bg-white font-inter font-semibold max-[426px]:text-[12px] text-[14px] outline-none cursor-pointer placeholder:opacity-100 transition-[color,opacity] duration-150 hover:placeholder:opacity-50',
				error ? '!bg-[#ffe5e5]' : '',
			].join(' ')}
		/>
	)
}

export default BirthDateField

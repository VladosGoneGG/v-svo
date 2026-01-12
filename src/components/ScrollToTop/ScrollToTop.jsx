import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const { pathname, hash } = useLocation()

	useEffect(() => {
		// Если есть hash (#payments и т.п.) — НЕ трогаем, пусть Home сам скроллит к секции
		if (hash) return

		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [pathname, hash])

	return null
}

export default ScrollToTop

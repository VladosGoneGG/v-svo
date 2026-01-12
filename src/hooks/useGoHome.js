import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useGoHome() {
	const location = useLocation()
	const navigate = useNavigate()

	return useCallback(() => {
		if (location.pathname !== '/') {
			navigate('/')
			return
		}

		// если уже на главной — просто скроллим вверх
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [location.pathname, navigate])
}

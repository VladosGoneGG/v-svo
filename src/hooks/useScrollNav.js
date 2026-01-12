import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useScrollNav() {
	const location = useLocation()
	const navigate = useNavigate()

	return useCallback(
		hash => {
			if (!hash?.startsWith('#')) return

			// Если не на главной — уходим на главную сразу с hash
			if (location.pathname !== '/') {
				navigate(`/${hash}`)
				return
			}

			// Если уже на главной — скроллим
			const el = document.querySelector(hash)
			if (!el) return
			el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		},
		[location.pathname, navigate]
	)
}

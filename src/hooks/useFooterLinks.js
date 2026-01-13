import { useQuery } from '@tanstack/react-query'
import { pagesMock } from '../mocks/pages.mock'

function getLabel(slug, page) {
	return (
		page?.meta?.name || // админка задаёт русское название
		page?.content?.hero?.title || // fallback (иногда ок)
		slug // последний fallback
	)
}

function buildLinksFromPagesMock() {
	const city = pagesMock.city ?? {}
	const specialization = pagesMock.specialization ?? {}
	const profession = pagesMock.profession ?? {}
	const unit = pagesMock.unit ?? {}

	const cities = Object.entries(city).map(([slug, page]) => ({
		slug,
		label: getLabel(slug, page),
	}))

	const specializations = Object.entries(specialization).map(
		([slug, page]) => ({
			slug,
			type: 'specialization',
			label: getLabel(slug, page),
		})
	)

	const professions = Object.entries(profession).map(([slug, page]) => ({
		slug,
		type: 'profession',
		label: getLabel(slug, page),
	}))

	const units = Object.entries(unit).map(([slug, page]) => ({
		slug,
		label: getLabel(slug, page),
	}))

	const byLabel = (a, b) => (a.label || '').localeCompare(b.label || '', 'ru')

	return {
		cities: cities.sort(byLabel),
		specAndProf: [...specializations, ...professions].sort(byLabel),
		units: units.sort(byLabel),
	}
}

async function fetchFooterLinks() {
	await new Promise(r => setTimeout(r, 80))
	return buildLinksFromPagesMock()
}

export function useFooterLinks() {
	return useQuery({
		queryKey: ['footerLinks'],
		queryFn: fetchFooterLinks,
		staleTime: 1000 * 60 * 10,
	})
}

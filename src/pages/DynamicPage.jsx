import { Helmet } from '@dr.pogodin/react-helmet'
import { useLocation, useParams } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import Answers from '../components/Answers/Answers'
import Benifits from '../components/Benifits/Benifits'
import Compensations from '../components/Compensations/Compensations'
import Consultation from '../components/Consultation/Consultation'
import Equipment from '../components/Equipment/Equipment'
import Feedback from '../components/Feedback/Feedback'
import Foreigners from '../components/Foreigners/Foreigners'
import Hero from '../components/Hero/Hero'
import Papers from '../components/Papers/Papers'
import Possibilities from '../components/Possibilities/Possibilities'
import Questions from '../components/Questions/Questions'
import Requirements from '../components/Requirements/Requirements'
import Specialties from '../components/Specialties/Specialties'
import Stages from '../components/Stages/Stages'
import Vacansies from '../components/Vacansies/Vacansies'

import { useDynamicPage } from '../hooks/useDynamicPage'

const BRAND_SUFFIX = ' — SVO GO'

const clamp = (str, max = 160) => {
	if (!str) return ''
	const s = String(str).replace(/\s+/g, ' ').trim()
	return s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s
}

const firstTextLine = hero => {
	const t = hero?.text
	if (Array.isArray(t)) return t.find(Boolean) ?? ''
	if (typeof t === 'string') return t
	return ''
}

const DynamicPage = ({ pageType }) => {
	// ✅ все хуки ДО любых return (иначе будет ошибка порядка хуков)
	const { slug } = useParams()
	const location = useLocation()
	const { data, isLoading, isError, error } = useDynamicPage(pageType, slug)

	if (isLoading) return <div className='p-5'>Загрузка…</div>

	if (isError) {
		const is404 = error?.status === 404
		return <div className='p-5'>{is404 ? 'Страница не найдена' : 'Ошибка'}</div>
	}

	const meta = data?.meta ?? {}
	const c = data?.content ?? {}
	const hero = c.hero ?? {}

	// TITLE priority: seo.title -> meta.name -> hero.title
	const baseTitle = data?.seo?.title || meta.name || hero.title || 'Страница'
	const title = `${baseTitle}${BRAND_SUFFIX}`

	// DESCRIPTION priority: seo.description -> hero.subtitle -> first hero text
	const baseDescription =
		data?.seo?.description || hero.subtitle || firstTextLine(hero)
	const description = clamp(baseDescription)

	// canonical (важно: без hash/query)
	const canonicalUrl = `https://your-domain.ru${location.pathname}`

	return (
		<>
			<Helmet>
				{/* BASIC */}
				<title>{title}</title>
				{description ? <meta name='description' content={description} /> : null}

				{/* CANONICAL */}
				<link rel='canonical' href={canonicalUrl} />

				{/* OPEN GRAPH */}
				<meta property='og:type' content='website' />
				<meta property='og:title' content={title} />
				{description ? (
					<meta property='og:description' content={description} />
				) : null}
				<meta property='og:url' content={canonicalUrl} />
			</Helmet>

			<div className='min-h-screen flex flex-col w-full max-w-300 min-[1200px]:mx-auto'>
				<Header />

				<main className='flex-1 mt-2.5'>
					<Hero {...c.hero} />
					<Compensations {...c.compensations} />
					<Benifits {...c.benifits} />
					<Vacansies {...c.vacansies} />
					<Answers {...c.answers} />
					<Equipment {...c.equipment} />
					<Requirements {...c.requirements} />
					<Specialties {...c.specialties} />
					<Stages {...c.stages} />
					<Possibilities {...c.possibilities} />
					<Papers {...c.papers} />
					<Foreigners {...c.foreigners} />
					<Feedback {...c.feedback} />
					<Questions {...c.questions} />
					<Consultation {...c.consultation} />
				</main>

				<Footer />
			</div>
		</>
	)
}

export default DynamicPage

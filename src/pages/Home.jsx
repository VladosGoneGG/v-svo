import { Helmet } from '@dr.pogodin/react-helmet'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Answers from '../components/Answers/Answers'
import Benifits from '../components/Benifits/Benifits'
import Compensations from '../components/Compensations/Compensations'
import Consultation from '../components/Consultation/Consultation'
import Equipment from '../components/Equipment/Equipment'
import Feedback from '../components/Feedback/Feedback'
import Footer from '../components/Footer/Footer'
import Foreigners from '../components/Foreigners/Foreigners'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Papers from '../components/Papers/Papers'
import Possibilities from '../components/Possibilities/Possibilities'
import Questions from '../components/Questions/Questions'
import Requirements from '../components/Requirements/Requirements'
import Specialties from '../components/Specialties/Specialties'
import Stages from '../components/Stages/Stages'
import Vacansies from '../components/Vacansies/Vacansies'

const BRAND_SUFFIX = ' — SVO GO'

const clamp = (str, max = 160) => {
	if (!str) return ''
	const s = String(str).replace(/\s+/g, ' ').trim()
	return s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s
}

const Home = () => {
	const location = useLocation()
	const { hash } = location

	useEffect(() => {
		if (!hash) return
		const el = document.querySelector(hash)
		if (!el) return
		setTimeout(() => {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 0)
	}, [hash])

	// SEO (пока статично, потом можно тоже брать из Hero как на DynamicPage)
	const baseTitle = 'Название сайта — Главная'
	const title = `${baseTitle}${BRAND_SUFFIX}`

	const description = clamp(
		'Краткое и понятное описание главной страницы для поисковиков.'
	)

	// canonical без hash (важно!)
	const canonicalUrl = `https://your-domain.ru${location.pathname}`

	return (
		<>
			<Helmet>
				{/* BASIC SEO */}
				<title>{title}</title>
				{description && <meta name='description' content={description} />}

				{/* CANONICAL */}
				<link rel='canonical' href={canonicalUrl} />

				{/* OPEN GRAPH */}
				<meta property='og:type' content='website' />
				<meta property='og:title' content={title} />
				{description && (
					<meta property='og:description' content={description} />
				)}
				<meta property='og:url' content={canonicalUrl} />
			</Helmet>

			<div className='min-h-screen flex flex-col w-full max-w-300 min-[1200px]:mx-auto '>
				<Header />

				<main className='flex-1 mt-2.5'>
					<Hero />
					<Compensations />
					<Benifits />
					<Vacansies />
					<Answers />
					<Equipment />
					<Requirements />
					<Specialties />
					<Stages />
					<Possibilities />
					<Papers />
					<Foreigners />
					<Feedback />
					<Questions />
					<Consultation />
				</main>

				<Footer />
			</div>
		</>
	)
}

export default Home

import { Helmet } from '@dr.pogodin/react-helmet'
import { useLocation } from 'react-router-dom'

import Answers from '../components/Answers/Answers'
import Blogsection from '../components/Blogsection/Blogsection'
import Consultation from '../components/Consultation/Consultation'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Requirements from '../components/Requirements/Requirements'
import { useBlogPage } from '../hooks/useBlogPage'

const BRAND_SUFFIX = ' — SVO GO'

const clamp = (str, max = 160) => {
	if (!str) return ''
	const s = String(str).replace(/\s+/g, ' ').trim()
	return s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s
}

const Blog = () => {
	const { data } = useBlogPage()
	const location = useLocation()

	// SEO fallback
	const baseTitle = data?.seo?.title || 'Блог'

	const title = `${baseTitle}${BRAND_SUFFIX}`

	const baseDescription =
		data?.seo?.description ||
		data?.block1?.text ||
		'Полезные статьи, разборы и рекомендации.'

	const description = clamp(baseDescription)

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

					{data && (
						<>
							<Blogsection data={data.block1} />
							<Blogsection data={data.post1} bgClassName='bg-[#F9F9F9]' />

							<Answers />

							<Blogsection data={data.block2} />
							<Blogsection data={data.post2} bgClassName='bg-[#F9F9F9]' />

							<Requirements />

							<Blogsection data={data.block3} bgClassName='bg-[#F9F9F9]' />
							<Blogsection data={data.post3} />

							<Consultation />
						</>
					)}
				</main>

				<Footer />
			</div>
		</>
	)
}

export default Blog

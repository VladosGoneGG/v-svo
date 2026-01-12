import { Helmet } from '@dr.pogodin/react-helmet'

import Answers from '../components/Answers/Answers'
import Blogsection from '../components/Blogsection/Blogsection'
import Consultation from '../components/Consultation/Consultation'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Requirements from '../components/Requirements/Requirements'
import { useBlogPage } from '../hooks/useBlogPage'

const Blog = () => {
	const { data } = useBlogPage()

	return (
		<>
			<Helmet>
				<title>Блог — Название сайта</title>
				<meta
					name='description'
					content='Полезные статьи, разборы и рекомендации.'
				/>

				{/* важно для SEO */}
				<link
					rel='canonical'
					href={`${window.location.origin}${window.location.pathname}`}
				/>
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

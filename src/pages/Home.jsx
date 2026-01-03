import Benifits from '../components/Benifits/Benifits'
import Compensations from '../components/Compensations/Compensations'
import Equipment from '../components/Equipment/Equipment'
import Feedback from '../components/Feedback/Feedback'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Possibilities from '../components/Possibilities/Possibilities'
import Requirements from '../components/Requirements/Requirements'
import Stages from '../components/Stages/Stages'
import Vacansies from '../components/Vacansies/Vacansies'

const Home = () => {
	return (
		<div className='min-h-screen flex flex-col w-full max-w-300 min-[1200px]:mx-auto '>
			<Header />

			<main className='flex-1 mt-2.5'>
				<Hero />
				<Compensations />
				<Benifits />
				<Vacansies />
				<Equipment />
				<Requirements />
				<Stages />
				<Possibilities />
				<Feedback />
			</main>

			<Footer />
		</div>
	)
}

export default Home

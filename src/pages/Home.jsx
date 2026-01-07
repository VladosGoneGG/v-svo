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

const Home = () => {
	return (
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
	)
}

export default Home

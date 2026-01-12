import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './index.css'
import Blog from './pages/Blog'
import Home from './pages/Home'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					<ScrollToTop />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/blog' element={<Blog />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>
)

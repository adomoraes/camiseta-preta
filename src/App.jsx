import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"

export default function App() {
	return (
		<Router>
			<Header />
			<main className='container flex-1 py-10'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/profile/:id' element={<Profile />} />
					<Route path='/sobre' element={<About />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	)
}

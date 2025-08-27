import React from "react"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
	const { pathname } = useLocation()

	return (
		<header className='bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-brand.card/60 border-b border-gray-100 dark:border-gray-800'>
			<div className='container py-4 flex items-center justify-between'>
				<Link to='/' className='text-xl font-black tracking-tight'>
					<span className='px-2 py-1 rounded-md bg-gradient-to-r from-brand.green via-brand.yellow to-brand.red text-black'>
						C
					</span>
					<span className='ml-2'>Camiseta Preta</span>
				</Link>

				<nav className='flex items-center gap-6 text-gray-600 dark:text-gray-300'>
					<Link
						className={`hover:text-gray-900 dark:hover:text-white ${
							pathname === "/" ? "font-semibold" : ""
						}`}
						to='/'>
						Home
					</Link>
					<Link
						className={`hover:text-gray-900 dark:hover:text-white ${
							pathname === "/sobre" ? "font-semibold" : ""
						}`}
						to='/sobre'>
						Sobre
					</Link>
					<ThemeToggle />
				</nav>
			</div>
		</header>
	)
}

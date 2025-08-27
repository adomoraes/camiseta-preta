import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
	return (
		<header className='bg-white shadow-sm'>
			<div className='container py-4 flex items-center justify-between'>
				<h1 className='text-xl font-bold'>Camiseta Preta</h1>
				<nav className='text-gray-600'>
					<Link className='mr-4 hover:text-gray-900' to='/'>
						Home
					</Link>
					<Link className='hover:text-gray-900' to='/sobre'>
						Sobre
					</Link>
				</nav>
			</div>
		</header>
	)
}

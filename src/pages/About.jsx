import React from "react"

export default function About() {
	return (
		<div className='max-w-3xl mx-auto bg-white p-6 rounded-lg shadow'>
			<h2 className='text-2xl font-bold mb-4'>Sobre a Camiseta</h2>
			<p className='mb-4 text-gray-700'>
				Esta camiseta celebra personalidades inspiradoras, como uma “Pokedex” de
				gente que deixa sua marca.
			</p>
			<a
				href='https://link-de-compra.com'
				target='_blank'
				rel='noopener noreferrer'
				className='inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition'>
				Garanta sua camiseta
			</a>
		</div>
	)
}

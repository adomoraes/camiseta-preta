import React from "react"
import { Link } from "react-router-dom"

export default function CardProfile({ profile }) {
	return (
		<Link to={`/profile/${profile.id}`}>
			<div className='bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow cursor-pointer'>
				<img
					src={profile.foto}
					alt={profile.nome}
					className='w-full h-48 object-cover rounded-md mb-4'
				/>
				<h3 className='text-lg font-semibold'>{profile.nome}</h3>
			</div>
		</Link>
	)
}

import React from "react"

export default function ProfileDetail({ profile }) {
	if (!profile) return <p>profile não encontrado</p>

	return (
		<div className='bg-white rounded-lg shadow p-6 max-w-3xl mx-auto'>
			<img
				src={profile.foto}
				alt={profile.nome}
				className='w-full h-96 object-cover rounded-md mb-6'
			/>
			<h2 className='text-2xl font-bold mb-4'>{profile.nome}</h2>
			<p className='text-gray-700 mb-4'>{profile.bio}</p>
			<div className='flex space-x-4'>
				{profile.redes.instagram && (
					<a
						href={profile.redes.instagram}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:underline'>
						Instagram
					</a>
				)}
				{profile.redes.twitter && (
					<a
						href={profile.redes.twitter}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:underline'>
						Twitter
					</a>
				)}
			</div>
		</div>
	)
}

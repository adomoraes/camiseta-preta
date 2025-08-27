import React from "react"
import profiles from "../data/profiles.json"
import CardProfile from "../components/CardProfile"

export default function Home() {
	return (
		<div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{profiles.map((p) => (
				<CardProfile key={p.id} profile={p} />
			))}
		</div>
	)
}

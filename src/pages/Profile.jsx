import React from "react"
import { useParams } from "react-router-dom"
import profiles from "../data/profiles.json"
import ProfileDetail from "../components/ProfileDetail"

export default function Profile() {
	const { id } = useParams()
	const profile = profiles.find((p) => p.id === parseInt(id))
	return <ProfileDetail profile={profile} />
}

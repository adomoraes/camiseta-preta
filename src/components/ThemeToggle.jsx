import React from "react"
import useTheme from "../hooks/useTheme"

export default function ThemeToggle() {
	const { theme, toggle } = useTheme()
	return (
		<button
			onClick={toggle}
			className='inline-flex items-center gap-2 px-3 py-2 rounded-xl2 border border-gray-200 dark:border-gray-700
                 bg-white dark:bg-brand.card hover:shadow-soft dark:hover:shadow-soft-dark transition'
			aria-label='Alternar tema'
			title='Alternar tema'>
			<span className='h-2 w-2 rounded-full bg-brand.green' />
			<span className='h-2 w-2 rounded-full bg-brand.yellow' />
			<span className='h-2 w-2 rounded-full bg-brand.red' />
			<span className='text-sm text-gray-700 dark:text-gray-200'>
				{theme === "dark" ? "Escuro" : "Claro"}
			</span>
		</button>
	)
}

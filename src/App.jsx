import React from "react"

export default function App() {
	return (
		<div className='min-h-screen flex flex-col'>
			<header className='bg-white shadow-sm'>
				<div className='container'>
					<div className='py-4 flex items-center justify-between'>
						<h1 className='text-xl font-bold'>Camiseta Preta</h1>
						<nav className='text-sm text-gray-600'>
							{/* quando avançarmos, aqui entraremos com Links do React Router */}
							<span className='mr-4'>Home</span>
							<span className='mr-4'>Sobre</span>
						</nav>
					</div>
				</div>
			</header>

			<main className='container flex-1 py-10'>
				<div className='rounded-lg border border-dashed border-gray-200 p-8 text-center'>
					<h2 className='text-2xl font-semibold mb-2'>
						Setup inicial concluído ✅
					</h2>
					<p className='text-gray-600 mb-4'>
						React + Vite, TailwindCSS e vite-plugin-pwa configurados.
					</p>
					<p className='text-sm text-gray-500'>
						Diga <strong>“Próximo”</strong> quando quiser que eu implemente
						rotas, componentes e a listagem de personagens.
					</p>
				</div>
			</main>

			<footer className='bg-white border-t'>
				<div className='container py-4 text-sm text-gray-500'>
					Feito para demo PWA · Estúdio Wreck
				</div>
			</footer>
		</div>
	)
}

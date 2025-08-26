import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "robots.txt", "icons/*.png"],
			manifest: {
				name: "Camiseta Pokedex",
				short_name: "PokedexCamisa",
				description: "Personalidades estampadas — PWA demo",
				start_url: "/",
				display: "standalone",
				background_color: "#ffffff",
				theme_color: "#111827",
				icons: [
					{
						src: "/icons/icon-192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/icons/icon-512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
			workbox: {
				runtimeCaching: [
					{
						urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
						handler: "CacheFirst",
						options: {
							cacheName: "images-cache",
							expiration: {
								maxEntries: 60,
								maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
							},
						},
					},
					{
						urlPattern: /^https?:.*\/data\/.*\.json/,
						handler: "NetworkFirst",
						options: {
							cacheName: "data-cache",
						},
					},
				],
			},
		}),
	],
	server: {
		port: 5173,
	},
})

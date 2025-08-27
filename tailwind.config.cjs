module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: { "2xl": "1440px" },
		},
		extend: {
			colors: {
				brand: {
					green: "#22c55e", // verde
					yellow: "#facc15", // amarelo
					red: "#ef4444", // vermelho
					dark: "#0b0f16", // fundo principal dark
					card: "#111827", // cartas em dark
				},
			},
			boxShadow: {
				soft: "0 6px 18px rgba(0,0,0,0.08)",
				"soft-dark": "0 6px 18px rgba(0,0,0,0.35)",
			},
			borderRadius: {
				xl2: "1.25rem",
			},
		},
	},
	plugins: [],
}

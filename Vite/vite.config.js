import { defineConfig } from "vite";

export default defineConfig({
	root: "./",
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				index: "index.html",
                combustao: "src/pages/combustao.html",
                contrabalancadas: "src/pages/contrabalancadas.html",
                diesel: "src/pages/diesel.html",
                eletricas: "src/pages/eletricas.html",
                gas: "src/pages/gas.html",
                litio: "src/pages/litio.html",
                orcamento: "src/pages/orcamento.html",
                patoladas: "src/pages/patoladas.html",
                quem: "src/pages/quem.html",
                retrateis: "src/pages/retrateis.html",
                termos: "src/downloads/termos.pdf",
                carousel: "src/scripts/carousel.js",
                carouselBrand: "src/scripts/carouselBrand.js",
                footer: "src/scripts/footer.js",
				globalScript: "src/scripts/globalScript.js",
				header: "src/scripts/header.js",
			},
			output: {
				entryFileNames: "src/scripts/[name].js",
				chunkFileNames: "chunks/[name].js",
				//assetFileNames: "assets/[name].[ext]",
                assetFileNames: ({ name }) => {
                    const ext = name.split('.')[1]
                    if (ext === 'pdf') {
                        return `src/downloads/${name}`;
                    } else {
                        return `assets/${name}`;
                    }
                },
			},
		},
	},
	server: {
		open: true,
		strictPort: true,
		port: 3000,
	},
});


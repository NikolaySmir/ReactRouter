import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	build: {
		outDir: path.resolve(__dirname, "dist"),
		emptyOutDir: true,
		rollupOptions: {
			input: path.resolve(__dirname, "index.html"),
			output: {
				entryFileNames: "assets/[name].[hash].js",
				chunkFileNames: "assets/[name].[hash].js",
				assetFileNames: "assets/[name].[ext]",
			},
		},
	},
	plugins: [react()],
	resolve: {
		extensions: [".ts", ".js", ".jsx"],
	},
	css: {
		preprocessorOptions: {
			scss: {},
		},
	},
	assetsInclude: [
		"**/*.png",
		"**/*.jpg",
		"**/*.gif",
		"**/*.svg",
		"**/*.mp3",
		"**/*.woff",
		"**/*.woff2",
		"**/*.eot",
		"**/*.ttf",
		"**/*.otf",
	],
	server: {
		open: true,
	},
});

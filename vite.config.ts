import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: { port: 8080 },
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
			'@': path.resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/scss/shared.scss";',
			},
		},
	},
});

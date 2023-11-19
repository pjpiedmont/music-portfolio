import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 8080,
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~bootstrap': fileURLToPath(
				new URL('./node_modules/bootstrap', import.meta.url),
			),
			'~icons': fileURLToPath(
				new URL('./node_modules/bootstrap-icons', import.meta.url),
			),
		},
	},
});

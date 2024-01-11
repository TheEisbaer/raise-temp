import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),

		Icons({
			compiler: 'svelte',
			scale: 1.5
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

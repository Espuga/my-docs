// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Dev Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Espuga' }],
			sidebar: [
				{
					label: 'Vue3',
					items: [
						{ label: '🌐 Translations', slug: 'vue3/translations' },
            { label: '🧭 Tours', slug: 'vue3/tours' },
					],
				},
			],
		}),
	],
});

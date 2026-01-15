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
					label: '🧩 Vue3',
					items: [
						{ label: '🌐 Translations', slug: 'vue3/translations' },
            { label: '🧭 Tours', slug: 'vue3/tours' },
					],
				},
				{
					label: '🤖 AI',
					items: [
						{ label: '🧠 Conversational AI', slug: 'ai/conversational' },
						{ label: '🛠️ Tool Function as Agent', slug: 'ai/agent' },
					],
				},
				{
					label: 'UOC',
					items: [
						{ label: 'Back-end', slug: 'uoc/back-end/backend' },
						{ label: 'Full stack', slug: 'uoc/full-stack/fullstack' },
					],
				},
			],
		}),
	],
});

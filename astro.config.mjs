import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import preact from '@astrojs/preact';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://nani-sebastian.com',
	output: 'server',
	adapter: vercel(),
	integrations: [mdx(), sitemap(), preact()],
});

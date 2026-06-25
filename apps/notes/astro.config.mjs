import { fileURLToPath, URL } from 'node:url'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import { remarkCodeTitle } from './src/plugins/remark-code-title.mjs'

export default defineConfig({
  integrations: [mdx(), react()],
  markdown: {
    remarkPlugins: [remarkCodeTitle],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@notes': fileURLToPath(new URL('./src', import.meta.url)),
        '@notes-content': fileURLToPath(new URL('./content', import.meta.url)),
        '@notes-public': fileURLToPath(new URL('./public', import.meta.url)),
      },
    },
  },
})

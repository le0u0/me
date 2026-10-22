import { copyFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import profile from './src/data/profile.json' with { type: 'json' }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'static-page-entries',
      apply: 'build',
      async writeBundle({ dir }) {
        for (const { href } of profile.navigation.filter(route => route.href !== '/')) {
          const page = href.slice(1)
          await mkdir(resolve(dir, page), { recursive: true })
          await copyFile(resolve(dir, 'index.html'), resolve(dir, page, 'index.html'))
        }
      },
    },
  ],
})

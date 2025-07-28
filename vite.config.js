import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/React-Tailwind-practice/',  // ← THIS LINE IS CRUCIAL
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

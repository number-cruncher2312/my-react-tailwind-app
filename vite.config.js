import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/my-react-tailwind-app/',  // ← Change this to match your ACTUAL repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
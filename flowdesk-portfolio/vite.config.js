import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'YOUR_REPOSITORY_NAME' with the exact name of your GitHub repo!
export default defineConfig({
  base: '/FlowDesk/',
  plugins: [
    react(),
    tailwindcss()
  ],
})
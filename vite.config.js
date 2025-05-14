import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Create-React-App-With-Vite/',
  plugins: [react()],
})

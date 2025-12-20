import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allows the app to read package.json from the project root
      allow: ['..']
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
      }
    }
  }
})
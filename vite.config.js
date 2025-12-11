import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxies /api requests to your backend port (e.g., if running a separate Express server)
      // OR if using Vercel Dev, you usually don't need this as Vercel handles the routing.
      // Use this if you are running the API script as a standalone Node process on port 3000.
      '/api': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
      }
    }
  }
})

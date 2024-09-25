import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api': 'http://localhost:3000', // Replace with your Express server's URL
      '/api': 'https://digitsave-faucet-api.onrender.com', // Replace with your Express server's URL
    },
  },
})

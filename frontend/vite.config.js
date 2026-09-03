import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Optional convenience proxy for local development so the frontend
    // can call relative /api and /uploads paths if desired. The app
    // itself talks to the backend via VITE_API_URL (see src/services),
    // so this proxy is not required, but it's handy if you prefer
    // same-origin requests during development.
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})

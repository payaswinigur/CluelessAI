import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    base: '/',
    server: {
      port: 3000,
      strictPort: true,
      host: '0.0.0.0',
      watch: {
        usePolling: true
      }
    },
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL || '')
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            // Forward /api requests to the json-server instance to avoid CORS.
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            }
        },
    }
})

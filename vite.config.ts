import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        // Target an environment that supports top-level await
        target: 'es2022'
        // Alternatively, you can use 'node18' if you prefer
    }
})

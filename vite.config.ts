import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        target: 'esnext',
        rollupOptions: {
            output: {
                format: 'es',
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext',
        },
    },
}) 
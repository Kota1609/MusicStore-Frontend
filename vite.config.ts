import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        target: 'es2022',
        rollupOptions: {
            output: {
                format: 'es',
            },
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'es2022',
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },
}) 
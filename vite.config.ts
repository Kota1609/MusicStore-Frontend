// nuxt.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
    esbuild: {
        target: 'esnext',
        supported: {
            'top-level-await': true,
        },
    },
    build: {
        target: 'esnext',
        rollupOptions: {
            output: {
                format: 'es',
            },
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext',
            supported: {
                'top-level-await': true,
            },
        },
    },
    server: {
        esbuild: {
            target: 'esnext',
            supported: {
                'top-level-await': true,
            },
        },
    },
})
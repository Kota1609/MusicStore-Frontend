import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    ssr: {
        noExternal: true,
        optimizeDeps: {
            include: ['lucide-react']
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'lucide-react': ['lucide-react']
                }
            }
        },
        commonjsOptions: {
            include: [/node_modules/]
        }
    },
    optimizeDeps: {
        include: ['lucide-react'],
        exclude: []
    },
    resolve: {
        alias: {
            'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react')
        }
    }
})

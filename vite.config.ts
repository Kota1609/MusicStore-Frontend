import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    ssr: {
        noExternal: ['lucide-react']
    },
    optimizeDeps: {
        include: ['lucide-react']
    },
    resolve: {
        alias: {
            'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react')
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'lucide-react': ['lucide-react']
                }
            }
        }
    }
})

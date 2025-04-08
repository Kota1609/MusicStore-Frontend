import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    preset: 'vercel',
    esbuild: {
        options: {
            target: 'esnext'
        }
    },
    compatibilityDate: '2024-04-08',
    serverAssets: [
        {
            baseName: 'public',
            dir: './public'
        }
    ],
    routeRules: {
        '/**': {
            cors: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
}) 
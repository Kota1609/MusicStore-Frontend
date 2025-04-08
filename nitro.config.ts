import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    preset: 'node-server',
    esbuild: {
        options: {
            target: 'esnext'
        }
    },
    compatibilityDate: '2024-04-08'
}) 
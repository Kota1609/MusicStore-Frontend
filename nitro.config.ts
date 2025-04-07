import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    esbuild: {
        options: {
            target: 'esnext',
            supported: {
                'top-level-await': true,
            },
        },
    },
}) 
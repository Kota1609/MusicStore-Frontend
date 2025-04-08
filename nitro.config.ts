import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    esbuild: {
        options: {
            target: 'es2022'
        }
    }
}) 
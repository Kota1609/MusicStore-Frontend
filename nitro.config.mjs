import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    srcDir: 'src',
    buildDir: '.output',
    noPublicDir: false,
    runtimeConfig: {
        app: {
            baseURL: '/',
        },
    },
    routeRules: {
        '/**': { cors: true },
    },
}) 
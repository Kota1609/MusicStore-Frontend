const { defineNitroConfig } = require('nitropack')

module.exports = defineNitroConfig({
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
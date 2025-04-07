// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    // Existing Nuxt options…
    future: {
        typescriptBundlerResolution: false
    },
    // Add Nitro build configuration:
    nitro: {
        esbuild: {
            options: {
                // Set the target environment to one that supports top-level await
                target: 'node18', // or 'esnext'
                // Explicitly enable support for top-level await
                supported: {
                    'top-level-await': true
                }
            }
        }
    }
})

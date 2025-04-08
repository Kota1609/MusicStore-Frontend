const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const tsconfigPaths = require('vite-tsconfig-paths');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        target: 'es2022',
        rollupOptions: {
            output: {
                format: 'es',
            },
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'es2022',
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },
}); 
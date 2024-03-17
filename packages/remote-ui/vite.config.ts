import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'remote-ui',
            filename: 'remoteEntry.js',
            exposes: {
                './hello-world': './src/components/HelloWorld.vue',
                './i-button': './src/components/IButton.vue',
            },
            shared: ['vue'],
        }),
    ],
    build: {
        target: 'esnext',
        minify: true,
        assetsInlineLimit: 409600,
        rollupOptions: {
            output: {
                minifyInternalExports: true,
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 8000,
    },
    preview: {
        host: '0.0.0.0',
        port: 5001,
    },
})

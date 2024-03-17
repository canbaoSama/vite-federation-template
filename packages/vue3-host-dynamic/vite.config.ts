import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'vue3-host-dynamic',
            remotes: {},
            shared: ['vue'],
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 8002,
        strictPort: true,
    },
})

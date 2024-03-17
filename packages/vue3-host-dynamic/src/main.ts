import { createApp } from 'vue'

import { __federation_method_setRemote } from 'virtual:__federation__'

import App from './App.vue'

import './style.css'

__federation_method_setRemote('remote-ui', {
    url: () => Promise.resolve('http://localhost:5001/assets/remoteEntry.js'),
    format: 'esm',
    from: 'vite',
})

const app = createApp(App)
app.mount('#app')

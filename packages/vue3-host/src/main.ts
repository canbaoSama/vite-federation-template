import { createApp } from 'vue'
import HelloWorld from 'remote-ui/hello-world'
import IButton from 'remote-ui/i-button'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.component('hello-world', HelloWorld)
app.component('i-button', IButton)
app.mount('#app')

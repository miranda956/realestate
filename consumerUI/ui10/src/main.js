import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.mount('#app')

const app =createApp(App);

app.component('router', router)








import { createApp } from 'vue'
import Vuetify from 'vuetify'
import App from './app.vue'
import 'vuetify/dist/vuetify.min.css'
import router from './routes.js';


Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App)
  app.mount('#vue-app')
})

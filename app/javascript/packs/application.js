import { vue } from "vue";
import App from './app.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const app = Vue.vue({
    el: '#app',
    render: h => h(App)
  })
})
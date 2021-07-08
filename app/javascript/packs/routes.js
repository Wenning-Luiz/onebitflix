import HomeIndex from './components/home/index.vue';
import WatchIndex from './components/watch/index.vue';

//const HomeIndex = { template: '<div>HomeIndex</div>' }
//const WatchIndex = { template: '<div>WatchIndex</div>' }

const routes = [
    { path: '/', component: HomeIndex },
    { path: '/watch/:id', component: WatchIndex }
  ]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started
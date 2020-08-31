import Vue from 'vue'
import App from './App.vue'
//Resource
import VueResource from 'vue-resource';
//Router
import VueRouter from 'vue-router'
import { routes } from './routes.js'
//Bootstrsp
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Fontawesom icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
library.add(faFacebook, faInstagram, faLinkedin, faGithub, faTwitter)



Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
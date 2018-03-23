window.Vue = require('vue');

import Axios from 'axios'
import routes from './router'
import VueRouter from 'vue-router'
import Api from './services/api'
import Request from './services/request'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

Vue.component('font-awesome-icon', FontAwesomeIcon)


// Importación de componentes
import App from './view/App.vue';


// Plugins
import EventBus from './plugins/event-bus'

Vue.use(EventBus)
Vue.use(VueRouter)


window.Axios = Axios
window.Api = Api
window.Request = Request

Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

Axios.defaults.baseURL = 'http://localhost:8000/'
window.Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
}

const router = new VueRouter({
    routes,
    mode: 'history'
})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
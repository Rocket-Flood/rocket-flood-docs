import './bootstrap';
import {createApp} from 'vue';
import App from '../App.vue';
import router from './router.js'
import '../css/tailwind.css'
import '../css/app.css'

createApp(App)
.use(router)
.mount("#app")

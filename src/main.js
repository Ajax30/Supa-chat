import { createApp } from 'vue'
import router from '@/router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/css/global.css'  
import App from '@/App.vue'

createApp(App)
  .use(router)
  .mount('#app')

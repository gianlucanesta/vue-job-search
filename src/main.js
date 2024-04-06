import '@/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

const pinia = createPinia()
import router from '@/router'
import App from '@/App.vue'

createApp(App).use(pinia).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

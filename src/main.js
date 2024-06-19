import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import VueGtag from 'vue-gtag'
import router from './router'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faTwitter, faUserSecret)

app.use(createPinia())
app.use(router)
app.use(library)
app.use(VueGtag, {
  config: { id: '8278275127' }
})

app.mount('#app')

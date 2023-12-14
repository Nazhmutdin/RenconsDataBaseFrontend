import { createApp } from 'vue'
import App from './App.vue'

import v1ApiPlugin from "./plugins/v1Api"
import store from "./store/index"

const Application = createApp(App)

Application.use(v1ApiPlugin)
Application.use(store)
Application.use(
    require('cors')
)

Application.mount('#app')

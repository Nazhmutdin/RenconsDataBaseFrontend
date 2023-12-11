import { createApp } from 'vue'
import App from './App.vue'

import v1ApiPlugin from "../plugins/v1Api"

const Application = createApp(App)

Application.use(v1ApiPlugin)
Application.use(
    require('cors')
)

Application.mount('#app')

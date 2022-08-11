import { createApp } from 'vue'
import router from '@/router'

import svgIcon from '@/components/SvgIcon/index.vue'

import App from '@/App.vue'
import i18n from '@/language/i18n'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)

app.use(ElementPlus)
app.use(i18n)

app.component('svg-icon', svgIcon)

app.mount('#app')

import { createI18n } from 'vue-i18n'
import zh from '@/language/zh-cn.json'
import en from '@/language/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'zh',
    messages: {
        zh,
        en
    }
})

export default i18n

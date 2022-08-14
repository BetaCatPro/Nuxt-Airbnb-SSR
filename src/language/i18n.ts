import { createI18n } from 'vue-i18n'
import zh from '@/language/zh-cn.json'
import en from '@/language/en.json'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: import.meta.env.VITE_I18N_LOCALE || 'zh',
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'zh',
    messages: {
        zh,
        en
    }
})

export default i18n

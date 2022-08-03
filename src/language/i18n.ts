import { createI18n } from 'vue-i18n'
import zh from "@/language/zh";
import en from "@/language/en";

const i18n = createI18n({
    locale: 'zh',
    messages: {
        zh,
        en
    }
})

export default i18n

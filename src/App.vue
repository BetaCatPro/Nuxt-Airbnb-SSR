<script setup lang="ts">
import Header from '@/components/layout/Header/index.vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref } from 'vue'

const value2 = ref('')
const shortcuts = [
    {
        text: 'Today',
        value: new Date()
    },
    {
        text: 'Yesterday',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
        }
    },
    {
        text: 'A week ago',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
        }
    }
]
const disabledDate = (time: Date) => {
    return time.getTime() > Date.now()
}

const { locale: localLang } = useI18n()
const locale = ref(zhCn)

const changeLang = (lang: any) => {
    console.log(lang)
    locale.value = lang
    localLang.value = lang.name
}
</script>

<template>
    <el-config-provider :locale="locale">
        <Header @changeLang="changeLang" />
        <el-date-picker
            v-model="value2"
            type="date"
            placeholder="Pick a day"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
            :size="size"
        />
        <router-view />
    </el-config-provider>
</template>

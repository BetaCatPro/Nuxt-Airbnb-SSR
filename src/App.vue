<script setup lang="ts">
import Header from '@/components/layout/Header/index.vue'
import Footer from '@/components/layout/Footer/index.vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref } from 'vue'

const { locale: localLang } = useI18n()
const locale = ref(zhCn)

const changeLang = (lang: any) => {
    locale.value = lang
    localLang.value = lang.name
}
</script>

<template>
    <el-config-provider :locale="locale">
        <Header @changeLang="changeLang" />
        <router-view />
        <Footer />
    </el-config-provider>
</template>

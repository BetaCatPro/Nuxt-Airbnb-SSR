<script setup lang="ts">
import Header from '@/components/layout/Header/index.vue'
import Footer from '@/components/layout/Footer/index.vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLocaleStore } from '@/stores/locale'
const localeStore = useLocaleStore()

const { locale: localLang } = useI18n()
const locale = ref(zhCn)

const route = useRoute()

const changeLang = (lang: any) => {
    locale.value = lang
    localLang.value = lang.name
}
</script>

<template>
    <el-config-provider :locale="localeStore.locale">
        <Header
            v-show="route.fullPath.indexOf('/login')"
            @changeLang="changeLang"
        />
        <router-view />
        <Footer v-show="route.fullPath.indexOf('/login')" />
    </el-config-provider>
</template>

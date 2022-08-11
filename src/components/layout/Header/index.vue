<script lang="ts" setup>
import { saveLanguageAPI, fetchLanguageAPI } from '@/api/layouts'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { useI18n } from 'vue-i18n'
import { ref, defineEmits } from 'vue'

const { t } = useI18n()

// const emit = defineEmits<{(e: 'changeLang', language: any):void}>()
const emit = defineEmits(['changeLang'])

const activeIndex = ref('orders')
const handleSelect = (e: any) => {
    if (e === 'zh') {
        emit('changeLang', zhCn)
        saveLanguage(zhCn)
    } else if (e === 'en') {
        emit('changeLang', en)
        saveLanguage(en)
    }
}

// Mock 接口, 保存当前语言包
const saveLanguage = (language: any) => {
    saveLanguageAPI(language).then((res) => {
        const success = res?.success
        if (success) {
            console.log('切换语言成功')
        }
    })
}

// Mock接口：获取当前语言包
const getLanguage = () => {
    fetchLanguageAPI().then((res) => {
        const success = res?.success
        const result = res?.result
        if (success && result) {
            console.log('当前语言包: ' + result.name)
            if (result.name === 'zh-cn') {
                emit('changeLang', zhCn)
            } else if (result.name === 'en') {
                emit('changeLang', en)
            }
        }
    })
}

getLanguage()
</script>

<template>
    <div class="header-common">
        <img
            class="logo"
            src="../../../assets/images/airbnb.svg"
            alt="airbnb"
        />
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="orders">{{ t('header.menu.reservationCenter') }}</el-menu-item>
            <el-menu-item index="records">{{ t('header.menu.history') }}</el-menu-item>
            <el-sub-menu index="language">
                <template #title>{{ t('header.menu.language') }}</template>
                <el-menu-item index="zh">{{ t('header.menu.chinese') }}</el-menu-item>
                <el-menu-item index="en">{{ t('header.menu.english') }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="avatar">
                <img
                    class="avatar"
                    src="../../../assets/images/avatar.jpeg"
                    alt="avatar"
                />
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>

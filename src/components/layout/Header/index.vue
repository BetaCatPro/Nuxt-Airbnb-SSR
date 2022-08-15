<script lang="ts" setup>
import { userSignOutAPI } from '@/api/auth'
import { useAuthStore } from '@/stores/auth'
import { useLocaleStore } from '@/stores/locale'
import { ElMessage } from 'element-plus'
import en from 'element-plus/lib/locale/lang/en'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { createRequire } from 'module'

// Pinia
const authStore = useAuthStore()
const localeStore = useLocaleStore()

// I18n
const { t, locale: localeLanguage } = useI18n()

// Router
const router = useRouter()
const route = useRoute()

async function handleSelect(key: string, keyPath: string[]) {
    if (keyPath[0] === 'language') {
        if (key === 'zh') {
            localeLanguage.value = 'zh'
            localeStore.setLanguage(zhCn)
        } else if (key === 'en') {
            localeLanguage.value = 'en'
            localeStore.setLanguage(en)
        }
    } else if (keyPath[0] === 'avatar') {
        if (key === 'signout') {
            const response = await userSignOutAPI()
            if (response && response.success && response.result) {
                const { message, result } = response
                const { status } = result

                localStorage.removeItem('userId')
                authStore.setLoggedIn(status)
                ElMessage({ message, type: 'success', showClose: true })
                route.name !== 'Home' && router.push({ name: 'Home' })
            }
        }
    } else if (key === 'auth') {
        router.push({ name: 'Login' })
    }
}
</script>

<template>
    <div class="header-common">
        <img
            src="../../../assets/images/logo-text.png"
            alt="airbnb"
            class="icon-airbnb"
        />
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="orders">{{
                t('header.menu.reservationCenter')
            }}</el-menu-item>
            <el-menu-item index="records">{{
                t('header.menu.history')
            }}</el-menu-item>
            <el-sub-menu index="language">
                <template #title>{{ t('header.menu.language') }}</template>
                <el-menu-item index="zh">{{
                    t('header.menu.chinese')
                }}</el-menu-item>
                <el-menu-item index="en">{{
                    t('header.menu.english')
                }}</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="avatar" v-if="authStore.loggedIn === 1">
                <template #title>
                    <img
                        class="avatar"
                        src="../../../assets/images/avatar.jpeg"
                        alt="avatar"
                    />
                </template>
                <el-menu-item index="signout">退出</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="auth" v-else>
                {{ t('auth.signinTab') }}/{{ t('auth.signupTab') }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>

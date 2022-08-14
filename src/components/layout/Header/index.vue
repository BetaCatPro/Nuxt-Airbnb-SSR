<script lang="ts" setup>
import { saveLanguageAPI, fetchLanguageAPI } from '@/api/layouts'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import router from '@/router'
import { userSignOutAPI } from '@/api/auth'
import { IResult } from '@/api/interface'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '@/stores/auth';
import { useLocaleStore } from "@/stores/locale";

const { t } = useI18n()

// const emit = defineEmits<{(e: 'changeLang', language: any):void}>()
const emit = defineEmits(['changeLang'])

const authStore = useAuthStore()
const localeStore = useLocaleStore()
const userStatus = authStore.loggedIn

const activeIndex = ref('orders')

const handleSelect = (e: any) => {
    if (e === 'zh') {
        emit('changeLang', zhCn)
        localeStore.setLanguage(zhCn)
    } else if (e === 'en') {
        emit('changeLang', en)
        localeStore.setLanguage(en)
    } else if (e === 'login') {
        router.push('login')
    } else if (e === 'logout') {
        userLogout()
    }
}

const userLogout = () => {
    userSignOutAPI().then((res: IResult | undefined) => {
        const { success, message, result } = res
        const { status } = result;
        if (success) {
            localStorage.removeItem('userId');
            authStore.setLoggedIn(status);
            ElMessage({message, type: 'success', showClose: true});
            router.push('login')
        } else {
            ElMessage({ message, type: 'error', showClose: true })
        }
    })
}

localeStore.getLanguage()
</script>

<template>
    <div class="header-common">
        <!--        <svg-icon v-if="props.icon" :name="props.icon" />-->
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

            <el-sub-menu index="avatar" v-if="userStatus === '1'">
                <template #title>
                    <img
                        class="avatar"
                        src="../../../assets/images/avatar.jpeg"
                        alt="avatar"
                    />
                </template>
                <el-menu-item index="logout">退出</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="login" v-else>
                {{ t('auth.signinTab') }}/{{ t('auth.signupTab') }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>

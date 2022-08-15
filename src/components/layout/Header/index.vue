<script lang="ts" setup>
import { userSignOutAPI } from '@/api/auth';
import { useAuthStore } from '@/stores/auth';
import { useLocaleStore } from '@/stores/locale';
import { ElMessage } from 'element-plus';
import en from 'element-plus/lib/locale/lang/en';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue'

// Pinia
const authStore = useAuthStore();
const localeStore = useLocaleStore();

// I18n
const {t, locale: localeLanguage} = useI18n();

// Router
const router = useRouter();
const route = useRoute();
const routes = ['Home'];

const buttonRef = ref();

const isHeaderIndependent = computed(() => {
    return !routes.includes(route.name as string);
});
const headerClassObject = computed(() => {
    return {
        relative: isHeaderIndependent.value,
        absolute: !isHeaderIndependent.value
    };
});
const menuClassObject = computed(() => {
    return {
        'border-b': isHeaderIndependent.value,
        'border-b-0': !isHeaderIndependent.value,
        'show-white-text': !isHeaderIndependent.value
    };
});

async function handleSelect(key: string, keyPath: string[]) {
    if (keyPath[0] === 'language') {
        if (key === 'zh-cn') {
            localeLanguage.value = 'zh-cn';
            localeStore.setLanguage(zhCn);
        } else if (key === 'en') {
            localeLanguage.value = 'en';
            localeStore.setLanguage(en);
        }
    } else if (keyPath[0] === 'avatar') {
        if (key === 'signout') {
            const response = await userSignOutAPI();
            if (response && response.success && response.result) {
                const {message, result} = response;
                const {status} = result;

                localStorage.removeItem('userId');
                authStore.setLoggedIn(status);
                ElMessage({message, type: 'success', showClose: true});
                route.name !== 'Home' && router.push({name: 'Home'});
            }
        }
    } else if (key === 'auth') {
        router.push({name: 'Login'});
    }
}
</script>

<template>
    <el-header
        class="w-full flex justify-between items-center p-0"
        :class="headerClassObject"
        height="81px">
        <el-menu
            mode="horizontal"
            background-color="transparent"
            class="menu w-full h-full justify-end font-semibold"
            :active-text-color="!isHeaderIndependent ? '#ffffff' : '#303133'"
            :class="menuClassObject"
            :ellipsis="false"
            @select="handleSelect">
            <!-- Logo -->
            <el-menu-item index="lgoo" class="menu-item logo p-0">
                <router-link :to="{ name: 'Home' }">
                    <h1 class="m-0 text-base">
                        <el-image :src="logoUrl" alt="logo" class="logo-container z-10">
                            <template #placeholder>
                                <div class="image-slot placeholder">Aircnc 爱此迎</div>
                            </template>
                            <template #error>
                                <div class="image-slot error">
                                    <el-icon>
                                        <i-ep-picture/>
                                    </el-icon>
                                </div>
                            </template>
                        </el-image>
                    </h1>
                </router-link>
            </el-menu-item>

            <div class="grow"></div>

            <!-- Reservation Center -->
            <el-menu-item index="reservationCenter" class="menu-item" ref="buttonRef">
                {{ t('header.menu.reservationCenter') }}
            </el-menu-item>

            <!-- Browsing History -->
            <el-menu-item index="history" class="menu-item">
                {{ t('header.menu.history') }}
            </el-menu-item>

            <!-- Language Selection -->
            <el-sub-menu
                index="language"
                class="submenu"
                popper-class="menu-popup-container"
                :popper-offset="-15">
                <template #title>{{ t('header.menu.language') }}</template>

                <!-- Chinese -->
                <el-menu-item index="zh-cn" v-show="localeLanguage !== 'zh-cn'">
                    {{ t('header.menu.chinese') }}
                </el-menu-item>

                <!-- English -->
                <el-menu-item index="en" v-show="localeLanguage !== 'en'">
                    {{ t('header.menu.english') }}
                </el-menu-item>
            </el-sub-menu>

            <!-- Auth -->
            <el-menu-item
                v-if="authStore.loggedIn === 0"
                index="auth"
                class="menu-item">
                {{ t('auth.signinTab') }} / {{ t('auth.signupTab') }}
            </el-menu-item>

            <!-- Avatar -->
            <el-sub-menu
                v-if="authStore.loggedIn === 1"
                index="avatar"
                class="submenu"
                popper-class="menu-popup-container"
                :popper-offset="-15">
                <template #title>
                    <img
                        :src="avatarUrl"
                        class="avatar rounded-full"
                        alt="avatar"
                        width="28"
                        height="28"/>
                </template>

                <el-menu-item index="signout"> {{ t('auth.signoutBtn') }}</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-header>
</template>

<style scoped lang="scss">
@import 'style';
</style>

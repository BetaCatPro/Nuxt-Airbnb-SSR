<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
    title: 'Aircnc爱此迎 - 全球民宿_公寓_短租_住宿_预订平台'
})
</script>

<template>
    <div class="home w-full">
        <div class="banner"></div>
        <div class="content px-6 my-10">
            <div class="mb-10">
                <h2 class="title font-semibold">{{ t('home.title') }}</h2>
                <h3 class="subtitle text-base mt-3">
                    {{ t('home.subtitle') }}
                </h3>
            </div>

            <aircnc-home-list />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>

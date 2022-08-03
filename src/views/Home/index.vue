<script setup lang="ts">
import { addOrUpdateDB } from "@/api";

import en from 'element-plus/lib/locale/lang/en'
import { useI18n } from 'vue-i18n'

// 切换语言
const { t, locale } = useI18n()
locale.value = en.name
</script>

<template>
    <div>
        <el-button>{{ t('message.home') }}</el-button>
        <div class="sc-test">
            <button @click="addOrUpdateDB">添加/修改</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>

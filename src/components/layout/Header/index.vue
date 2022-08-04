<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { ref, defineEmits } from 'vue'

// const emit = defineEmits<{(e: 'changeLang', language: any):void}>()
const emit = defineEmits(['changeLang'])

const activeIndex = ref('orders')
const handleSelect = (e: any) => {
    if (e === 'zh') {
        emit('changeLang', zhCn)
    } else {
        emit('changeLang', en)
    }
}
</script>

<template>
    <div class="header-common">
        <img class="logo" src="" alt="airbnb" />
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="orders">房屋订单中心</el-menu-item>
            <el-menu-item index="records">历史足迹</el-menu-item>
            <el-sub-menu index="language">
                <template #title>国际化切换</template>
                <el-menu-item index="zh">中文</el-menu-item>
                <el-menu-item index="en">英文</el-menu-item>
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

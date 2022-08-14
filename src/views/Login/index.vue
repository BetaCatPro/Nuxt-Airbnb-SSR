<script lang="ts" setup>
import useForm from '@/composables/auth/useForm';
import { Lock, UserFilled } from '@element-plus/icons-vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const {
    activeName,
    ruleFormRef,
    ruleForm,
    rules,
    handleSubmitForm,
    handleResetForm
} = useForm();
</script>

<template>
    <div class="login-page w-screen h-screen flex flex-row">
        <div class="left-part">
            <router-link :to="{ name: 'Home' }" class="block w-full h-full" />
        </div>

        <div class="right-part flex justify-center items-center">
            <div class="login-panel">
                <el-tabs
                    v-model="activeName"
                    @tab-click="handleResetForm(ruleFormRef)"
                    class="tabs">
                    <el-tab-pane name="signin">
                        <template #label>
                            <span class="tabs-label text-lg">{{ t('auth.signinTab') }}</span>
                        </template>
                    </el-tab-pane>

                    <el-tab-pane name="signup">
                        <template #label>
                            <span class="tabs-label text-lg">{{ t('auth.signupTab') }}</span>
                        </template>
                    </el-tab-pane>
                </el-tabs>

                <el-form
                    size="large"
                    ref="ruleFormRef"
                    class="mt-5"
                    :model="ruleForm"
                    :rules="rules"
                    @keyup.enter.self="handleSubmitForm(ruleFormRef)">
                    <el-form-item prop="phone">
                        <el-input
                            clearable
                            class="input"
                            :placeholder="t('auth.phone')"
                            :prefix-icon="UserFilled"
                            v-model="ruleForm.phone" />
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input
                            clearable
                            show-password
                            class="input"
                            :placeholder="t('auth.password')"
                            :prefix-icon="Lock"
                            v-model="ruleForm.password" />
                    </el-form-item>

                    <el-form-item class="mt-16">
                        <el-button
                            round
                            type="primary"
                            class="w-full"
                            native-type="submit"
                            @click.prevent="handleSubmitForm(ruleFormRef)">
                            {{
                            activeName === 'signin'
                            ? t('auth.signinBtn')
                            : t('auth.signupBtn')
                            }}
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>

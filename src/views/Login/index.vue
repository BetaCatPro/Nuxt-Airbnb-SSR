<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Lock, UserFilled } from '@element-plus/icons-vue'
import { userSignInAPI, userSignUpAPI } from '@/api/auth'
import { ElMessage } from 'element-plus'
import { IResult } from '@/api/interface'

interface IRuleForm {
    phone: string
    password: string
}

const router = useRouter()
const { t } = useI18n()
const activeName = ref('signin')
const ruleFormRef = ref()
const ruleForm: IRuleForm = reactive({
    phone: '',
    password: ''
})

const submitForm = () => {
    ruleFormRef.value.validate((valid: any) => {
        if (valid) {
            if (activeName.value === 'signin') {
                userSignIn(ruleForm)
            } else {
                userSignUp(ruleForm)
            }
        } else {
            return false
        }
    })
}

const userSignIn = (params: any) => {
    userSignInAPI(params).then((res: IResult | undefined) => {
        const { success, message } = res
        if (success) {
            ElMessage({ message, type: 'success', showClose: true })
            localStorage.setItem('userStatus', '1')
            router.push('home')
        } else {
            ElMessage({ message, type: 'error', showClose: true })
        }
    })
}

const userSignUp = (params: any) => {
    userSignUpAPI(params).then((res: IResult | undefined) => {
        const { success, message } = res
        if (success) {
            ElMessage({ message, type: 'success', showClose: true })
        } else {
            ElMessage({ message, type: 'error', showClose: true })
        }
    })
}
</script>

<template>
    <div class="login-page">
        <div class="left-part"></div>
        <div class="right-part">
            <div class="login-panel">
                <el-tabs v-model="activeName" class="tabs">
                    <el-tab-pane name="signin">
                        <template #label>
                            <span>{{ t('auth.signinTab') }}</span>
                        </template>
                    </el-tab-pane>

                    <el-tab-pane name="signup">
                        <template #label>
                            <span>{{ t('auth.signupTab') }}</span>
                        </template>
                    </el-tab-pane>
                </el-tabs>

                <el-form
                    size="large"
                    ref="ruleFormRef"
                    class="mt-5"
                    :model="ruleForm"
                    :rules="rules"
                >
                    <el-form-item prop="phone">
                        <el-input
                            clearable
                            class="input"
                            :placeholder="t('auth.phone')"
                            :prefix-icon="UserFilled"
                            v-model="ruleForm.phone"
                        />
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input
                            clearable
                            show-password
                            class="input"
                            :placeholder="t('auth.password')"
                            :prefix-icon="Lock"
                            v-model="ruleForm.password"
                        />
                    </el-form-item>

                    <el-form-item>
                        <el-button @click="submitForm" round type="primary">
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

<style scoped lang="scss">
@import 'style';
</style>

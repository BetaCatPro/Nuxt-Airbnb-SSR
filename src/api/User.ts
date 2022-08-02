import { request } from '@/http/axios'
import { LoginInfo } from '@/type/User'

/**
 * @description -封装User类型的接口方法
 */
export class UserService {
    /**
     * @description 用户登录
     * @return { HttpResponse } result
     * @param params
     */
    static async login(params: LoginInfo) {
        return request('/login', params, 'post')
    }
}

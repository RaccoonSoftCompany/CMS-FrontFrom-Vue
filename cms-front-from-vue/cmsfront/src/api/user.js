import request from '../utils/request'

export function comeLogin(data) {
    return request.post('/users/login', data)
}

export function comeRegister(parmars) {
    return request.post('/users/register', parmars)
}

export function changePassword(id, params) {
    return request.put(`/users/changePwd/${id}`, params)
}

export function forgetPasswordtoUsername(data) {
    return request.get(`users/ForgetPwdMatters/${data}`,)
}

export function forgetPassword(id, data) {
    return request.put(`users/ForgetPwd/${id}`, data)
}

export function getMatters() {
    return request.get('matters')
}

export function newUserInfos(id) {
    return request.post(`userinfos/newuserinfo/${id}`, {})
}

export function getUserInfos(id) {
    return request.post(`userinfos/newuserinfo/${id}`, {})
}

export function changeUserInfos(id, data) {
    return request.put(`/userinfos/ChangeUserInfo/${id}`, data)
}

export function getArticles() {
    return request.get('articles')
}

export function loginToken(data) {
    return request.post("/users/token", data)
}
const TOKENKEY = "token"
const REFRESHTOKENKEY = "refreshToken"
const ID = 'id'
const USERNAME = "username"
const PASSWORD = "password"


export function setToken(token, refreshToken) {
    localStorage.setItem(TOKENKEY, token)
    localStorage.setItem(REFRESHTOKENKEY, refreshToken)

}

export function loginStatus(username,password){
    localStorage.setItem(USERNAME, username)
    localStorage.setItem(PASSWORD, password)
}

export function getToken() {
    return localStorage.getItem(TOKENKEY) || ''
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESHTOKENKEY) || ''
}

export function removeToken() {
    localStorage.removeItem(ID)
    localStorage.removeItem(TOKENKEY)
    localStorage.removeItem(REFRESHTOKENKEY)
}

export function removeLoginStatus() {
    localStorage.removeItem(USERNAME)
    localStorage.removeItem(PASSWORD)
}

export function isLogin() {
    let token = getToken()
    if (token) {
        return true
    } else {
        return false
    }
}



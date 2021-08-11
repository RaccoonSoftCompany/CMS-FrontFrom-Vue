import request from '../utils/request'

export function getWebInfo(){
    return request.get('/Web')
}
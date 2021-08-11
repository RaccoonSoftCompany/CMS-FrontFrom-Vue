import request from '../utils/request'

export function getWebInfo(){
    return request.get('/Web')
}

export function getQRCode(){
    return request.get('QRCode/1')
}
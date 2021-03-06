import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {

    return originalPush.call(this, location).catch(err => err)

}
export default router
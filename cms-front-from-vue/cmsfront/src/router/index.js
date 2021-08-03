import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import Header from '../components/Header'
Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {

    return originalPush.call(this, location).catch(err => err)

}
export default router
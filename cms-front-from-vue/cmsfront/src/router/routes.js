import Layout from '../components/Layout'

let routes = [
    {
        path: '/',
        component: Layout,
        redirect: { path: '/article' },
        children: [
            {
                path: 'article',
                name: 'article',
                title: "文章内容",
                component: () => import('../components/article')
            },
        
            {
                path: 'news',
                name: 'news',
                component: () => import('../views/news')
            },
            {
                path: 'company',
                name: 'company',
                component: () => import('../views/company')
            },
            {
                path: 'show',
                name: 'show',
                component: () => import('../views/show')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../views/about')
            },

        ],



    },
    {
        path: '/articleDetail',
        name: 'articleDetail',
        props:router=>({id:router.query.articleId}),
        component: () => import(`../views/articleDetail`)
    }

]
export default routes
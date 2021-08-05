import request from '../utils/request'

//
export function getArticleDetail(id) {
    return request.get(`articles/articletexts/${id}`)
}

// 根据文章id获取评论数据
export function getArticleTalks(id) {
    return request.get(`/ArticleTalks/${id}`)
}

// 增加评论
export function addComment(data) {
    return request.post('/ArticleTalks/addTalk', data);
}

// 删除评论
export function deleteComment(id) {
    return request.delete(`/ArticleTalks/deletetalk/${id}`)
}

// 是否点赞
export function isArticleAPraises(uId, aId) {
    return request.get(`ArticleAPraises/${uId}/${aId}`)
}

// 48小时阅读排行
export function TheFirstReadCount() {
    return request.get('/Articles/TheFirstReadCount')
}

// 10天点赞排行
export function TheTenPraiseCount() {
    return request.get('/Articles/TheTenPraiseCount')
}

// 10天评论排行
export function TheTenTalkCount() {
    return request.get('/articles/TheTenTalkCount')
}
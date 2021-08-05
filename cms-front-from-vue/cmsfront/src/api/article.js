import request from '../utils/request'

//
export function getArticleDetail(id) {
    return request.get(`articles/articletexts/${id}`)
}

// 根据文章id获取评论数据
export function getArticleTalks(id){
    return request.get(`/ArticleTalks/${id}`)
}

// 增加评论
export function addComment(data){
    return request.post('/ArticleTalks/addTalk',data);
}

// 删除评论
export function deleteComment(id){
    return request.delete(`/ArticleTalks/deletetalk/${id}`)
}


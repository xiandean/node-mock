const router = require('koa-router')()
const { baseUrl, success } = require('../config')

let apis = []

let getData = require('../data/get')
for (let [k, v] of Object.entries(getData)) {
	apis.push(`GET ${baseUrl}/${k}`)
	router.get(`/${k}`, ctx => ctx.body = Object.assign({}, success, {data: v}))
}

let postData = require('../data/post')
for (let [k, v] of Object.entries(postData)) {
	apis.push(`POST ${baseUrl}/${k}`)
	router.post(`/${k}`, ctx => ctx.body = Object.assign({}, success, {data: v}))
}

let jsonData = require('../data/test.json')
for (let [k, v] of Object.entries(jsonData)) {
	apis.push(`GET ${baseUrl}/${k}`)
	router.get(`/${k}`, ctx => ctx.body = Object.assign({}, success, {data: v}))
}

router.get('/', ctx => ctx.body = apis)

module.exports = router

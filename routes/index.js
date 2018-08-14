const router = require('koa-router')()
const api = require('./api')
const { baseUrl } = require('../config')

router.get('/', async ctx => {
	await ctx.redirect(baseUrl)
})

router.use(baseUrl, api.routes(), api.allowedMethods())

module.exports = router

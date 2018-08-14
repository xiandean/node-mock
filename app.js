const path = require('path')
const Koa = require('koa2')
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
const cors = require('koa2-cors')
const json = require('koa-json')

const router = require('./routes/index')

const { port } = require('./config')

const app = new Koa()

app.use(bodyparser())

app.use(cors()) // 新增部分处理跨域
app.use(json())

app.use(static(path.join(__dirname, './public')))

app.use(router.routes(), router.allowedMethods())

app.listen(port, () => {
	console.log(`server is running at http://127.0.0.1:${port}/`)
})

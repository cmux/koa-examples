const Koa = require('koa')
const Router = require('koa-router')

/** @type {Koa} Koa 服务器实例 */
const app = new Koa()
/** @type {Router} koa-router 器实例 */
const router = new Router()

// 配置路由
router
    .get('/', async (ctx, next) => {
        ctx.body = 'Home'
        await next()
    })
    .get('/settings', async (ctx, next) => {
        ctx.body = 'Settings'
        await next()
    })

// 挂载中间件
// 中间件从上至下顺序运行
app
    .use(router.routes())
    .use(async (ctx, next) => {

        // 如果 body 为空，认为没有路由匹配，直接跳过该中间件，运行之后的中间件
        if (!ctx.body) return await next()

        // 如果 body 存在内容，认为路由有匹配，此时追加 body 内容
        // 中间件流程在此时终止
        ctx.body = ctx.body + `\n\n${ctx.request.href}`

    })
    .use(async ctx => {
        // 运行至此时，认为是一次 404 请求
        ctx.body = '[404] Page not found'
        ctx.status = 404
    })

// 侦听端口，启动服务器
app.listen(8080)

console.log('HTTP server on port 8080')

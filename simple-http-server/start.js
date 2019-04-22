const Koa = require('koa')

/** @type {Koa} Koa 服务器实例 */
const app = new Koa()

// 挂载一个中间件
app.use(async ctx => {
    ctx.body = `Hello World!`
        + `\n\n${ctx.request.href}`
})

// 侦听端口，启动服务器
app.listen(8080)

console.log('HTTP server on port 8080')

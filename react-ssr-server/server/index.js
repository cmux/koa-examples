import Koa from 'koa'
import middlewareSSR from './middleware-ssr'

const app = new Koa()

app.use(middlewareSSR)
app.listen(8080)

console.log('HTTP server on port 8080')

import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../react/app'

export default async (ctx, next) => {

    const reactHtml = renderToString(
        <App request={ctx.request} />
    )

    ctx.body = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>React SSR Server</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
${reactHtml}
</body>
</html>`

    next()

}

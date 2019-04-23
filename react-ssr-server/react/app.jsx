import React from 'react'

const App = ({ request = {} }) => (
    <div id="app">
        <h1>Hello World!</h1>
        <p>Current request href: {request.href}</p>
    </div>
)

export default App

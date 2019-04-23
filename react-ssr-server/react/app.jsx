import React from 'react'

const App = ({ request = {} }) => (
    <div
        id="app"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            width: '100vw',
            height: '100vh',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <h1>Hello World!</h1>
        <p>Current request href: <em>{request.href}</em></p>
    </div>
)

export default App

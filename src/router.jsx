import React from 'react'
import App from './App'
import Layout from './Layout'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <App/>
            },
            {
                path:"/products",
                element: <div>products</div>
            },
            {
                path:"/blog",
                element: <div>blog</div>
            },
            {
                path:"/pricing",
                element: <div>pricing</div>
            }
        ]
    }
])

export default router
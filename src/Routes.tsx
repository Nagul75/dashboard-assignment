import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import {type RouteObject } from "react-router-dom"

export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Dashboard/>}
        ]
    }
]
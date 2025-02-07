import { RouteObject } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import TodoPage from "../pages/TodoPage"
import CardPage from '../pages/CardPage'
import PhotoPage from '../pages/PhotoPage'

const routes: RouteObject[] = [
    {
        element: <HomePage/>,
        path: '/'
    },
    {
        element: <CardPage/>,
        path: "/card"
    },
    {
        element: <PhotoPage/>,
        path: "/Photo"
    },
    {
        element: <TodoPage/>,
        path: "/todo"
    }
 ]

export default routes


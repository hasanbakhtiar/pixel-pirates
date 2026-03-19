import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import TodoApp from "./pages/TodoApp"

const LayoutWithHeader = () => (
    <>
        <Header />
        <Outlet />
    </>
)

const router = createBrowserRouter([
    {
        element: <LayoutWithHeader />,
        children: [
            { path: "/", element: <Home /> },
        ],
    },
    {
        path: "/todoapp",
        element: <TodoApp />,
    },
])

const Router = () => <RouterProvider router={router} />

export default Router
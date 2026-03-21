import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/HomePage";
import AppsPage from "../components/AppsPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: 'apps',
                element: <AppsPage></AppsPage>,
                loader: () => fetch('apps.json')
            }
        ]
    }
])
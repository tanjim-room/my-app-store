import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/HomePage";
import AppsPage from "../components/AppsPage";
import InstallPage from "../components/InstallPage";
import AppDetail from "../components/AppDetail";
import ErrorPage from "../components/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: 'apps',
                element: <AppsPage></AppsPage>,
                loader: async () => {
                    const res = await fetch('/apps.json'); // ✅ use / (root path)
                    return res.json(); // ✅ convert to array
                }
            },
            {
                path: 'installation',
                element: <InstallPage></InstallPage>,
                loader: async () => {
                    const res = await fetch('/apps.json'); // ✅ use / (root path)
                    return res.json(); // ✅ convert to array
                }
            },
            {
                path: 'apps/:id',
                element: <AppDetail />,
                loader: async () => {
                    const res = await fetch('/apps.json'); // ✅ use / (root path)
                    return res.json(); // ✅ convert to array
                }
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
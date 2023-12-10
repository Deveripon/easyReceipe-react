import Layout from "../layouts/Layout";
import Single from "../pages/Single/Single";
import Auth from "../pages/auth/Auth";
import Error from "../pages/errors/Error";
import Home from "../pages/home/Home";

const publicRouter = [
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "accounts/login",
                element: <Auth />,
            },
            {
                path: "accounts/signup",
                element: <Auth />,
            },
            {
                path: "single/:id",
                element: <Single />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
];

export default publicRouter;

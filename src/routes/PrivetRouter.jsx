import Layout from "../layouts/Layout";
import Dashboard from "../pages/dashboard/Dashboard";

const privetRouter = [
    {
        element: <Layout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
];

export default privetRouter;

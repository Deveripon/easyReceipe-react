import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./PublicRouter";
import privetRouter from "./PrivetRouter";

const router = createBrowserRouter([...publicRouter, ...privetRouter]);

export default router;

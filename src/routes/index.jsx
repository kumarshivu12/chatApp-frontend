import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import routeList from "./routeList";

const router = createBrowserRouter([
  {
    path: routeList.root,
    Component: MainLayout,
    children: [{ path: routeList.dashboard, Component: Dashboard }],
  },
]);

export default router;

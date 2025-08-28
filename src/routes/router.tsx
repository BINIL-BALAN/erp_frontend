import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import routeList from "./routeList";
import AddWork from "../pages/WorkOrder/AddWork";
import ListWork from "../pages/WorkOrder/ListWork";

const router = createBrowserRouter([
  {
    path: routeList.root,
    Component: MainLayout,
    children: [
      { path: routeList.dashboard, Component: Dashboard },
      { path: routeList.addWork, Component: AddWork },
      { path: routeList.listWork, Component: ListWork }
    ],
  },
]);

export default router;

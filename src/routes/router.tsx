import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import routeList from "./routeList";
import AddWork from "../pages/WorkOrder/AddWork";
import ListWork from "../pages/WorkOrder/ListWork";
import PageNotFound from "../pages/ErrorHandling/PageNotFound";
import Login from "../pages/Auth/Login";
import Authentication from "../pages/Auth/Authentication";

const router = createBrowserRouter([
  {
    path: routeList.root,
    Component: MainLayout,
    children: [
      {
        element: <Authentication />,
        children: [
          { index:true, Component: Dashboard },
          { path: routeList.addWork, Component: AddWork },
          { path: routeList.listWork, Component: ListWork },
        ],
      },
    ],
  },
  {
    path: routeList.login,
    Component: Login,
  },
  {
    path: routeList.pageNotFound,
    Component: PageNotFound,
  },
]);

export default router;

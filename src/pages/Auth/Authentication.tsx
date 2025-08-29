import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";
import routeList from "../../routes/routeList";

function Authentication() {
  const { user } = useAuth();
  // if (!Boolean(user)) {
  //   return <Navigate to={routeList.login} replace />;
  // }
  return <Outlet />;
}

export default Authentication;

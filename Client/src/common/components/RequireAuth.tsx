import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const token = true // useSelector(selectAuthToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;


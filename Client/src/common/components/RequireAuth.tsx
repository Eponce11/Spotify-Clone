import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAuthToken } from "../../app/features/authSlice";

const RequireAuth = () => {
  const token = useAppSelector(selectAuthToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;


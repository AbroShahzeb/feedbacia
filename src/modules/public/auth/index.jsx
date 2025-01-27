import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

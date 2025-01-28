import { Navigate } from "react-router-dom";
import { Navbar } from "../layout/components";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("isAuthenticated"); // Replace this logic with your actual auth check

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default ProtectedRoute;

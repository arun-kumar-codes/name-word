import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, requireAuth }) => {
//   const token = localStorage.getItem("auth_token");
const token = false
console.log("ocnsole in authgaurd", token)

  if (requireAuth && !token) return <Navigate to="/signIn" replace />;
  if (!requireAuth && token) return <Navigate to="/dashboard" replace />;

  return children;
};

export default AuthGuard;

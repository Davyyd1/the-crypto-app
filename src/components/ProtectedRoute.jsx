import { useNavigate } from "react-router";
import { useEffect } from "react";
import useUser from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. load the auth user
  const { isLoading, isAuthenticated } = useUser();

  //2. if there is not auth user, redirect to the /signup
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/auth");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. while loading, show a spinner
  // if (isLoading) return "Loading...";

  // 4. if there is a user, render the app
  if (isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;

import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserIsAuthenticated } from "selectors/auth";

function ProtectedRouteLayout(props: PropsWithChildren) {
  const navigateTo = useNavigate();
  const userIsAuthenticated = useSelector(selectUserIsAuthenticated);

  useEffect(() => {
    if (!userIsAuthenticated) {
      navigateTo("/sign-in");
    }
  }, [userIsAuthenticated]);

  return <>{props.children}</>;
}

export default ProtectedRouteLayout;

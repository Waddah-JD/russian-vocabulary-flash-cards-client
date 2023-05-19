import { AuthContext } from "contexts/Auth";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouteLayout(props: PropsWithChildren): JSX.Element {
  const { userIsAuthenticated } = useContext(AuthContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!userIsAuthenticated) {
      navigateTo("/sign-in");
    }
  }, [userIsAuthenticated]);

  return <>{props.children}</>;
}

export default ProtectedRouteLayout;

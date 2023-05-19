import { AuthContext } from "contexts/Auth";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UnauthenticatedOnlyRouteLayout(props: PropsWithChildren): JSX.Element {
  const navigateTo = useNavigate();

  const { userIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (userIsAuthenticated) {
      navigateTo("/");
    }
  }, [userIsAuthenticated]);

  return <>{props.children}</>;
}

export default UnauthenticatedOnlyRouteLayout;

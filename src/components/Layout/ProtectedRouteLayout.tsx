import { AuthContext } from "contexts/Auth";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { REDIRECT_TO_PARAM_PATH_KEY } from "../../constants";

function ProtectedRouteLayout(props: PropsWithChildren): JSX.Element {
  const { userIsAuthenticated } = useContext(AuthContext);
  const navigateTo = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!userIsAuthenticated) {
      const target = pathname ? `/sign-in?${REDIRECT_TO_PARAM_PATH_KEY}=${pathname}` : "/sign-in";
      navigateTo(target);
    }
  }, [userIsAuthenticated]);

  return <>{props.children}</>;
}

export default ProtectedRouteLayout;

import { AuthContext } from "contexts/Auth";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { REDIRECT_TO_PARAM_PATH_KEY } from "../../constants";

function UnauthenticatedOnlyRouteLayout(props: PropsWithChildren): JSX.Element {
  const navigateTo = useNavigate();

  const [searchParams] = useSearchParams();
  const redirectToPath = searchParams.get(REDIRECT_TO_PARAM_PATH_KEY);

  const { userIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (userIsAuthenticated) {
      navigateTo(redirectToPath || "/");
    }
  }, [userIsAuthenticated]);

  return <>{props.children}</>;
}

export default UnauthenticatedOnlyRouteLayout;

import SplashScreen from "components/SplashScreen";
import AuthContextProvider, { AuthContext } from "contexts/Auth";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { isNil } from "utils/types";

import router from "./router";

function Main(): JSX.Element {
  const { isAuthenticating } = useContext(AuthContext);
  const shouldShowSplashScreen = isAuthenticating || isNil(isAuthenticating); // while authenticating or before the process starts

  if (shouldShowSplashScreen) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
}

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}

export default App;

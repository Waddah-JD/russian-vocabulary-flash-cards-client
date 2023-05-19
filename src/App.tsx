import SplashScreen from "components/SplashScreen";
import AuthContextProvider, { AuthContext } from "contexts/Auth";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";

function Main(): JSX.Element {
  const { isAuthenticating } = useContext(AuthContext);
  const shouldShowSplashScreen = [isAuthenticating].some((loading) => Boolean(loading)); // all the loaders that should trigger splash screen

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

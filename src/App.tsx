import SplashScreen from "components/SplashScreen";
import { Provider, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { selectUserAuthStateIsLoading } from "selectors/auth";

import router from "./router";
import store from "./store";

function Main(): JSX.Element {
  const authStateIsLoading = useSelector(selectUserAuthStateIsLoading);
  const shouldShowSplashScreen = [authStateIsLoading].some((loading) => Boolean(loading)); // all the loaders that should trigger splash screen

  if (shouldShowSplashScreen) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
}

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

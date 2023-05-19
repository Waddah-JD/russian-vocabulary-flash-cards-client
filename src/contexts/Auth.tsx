import { onAuthStateChanged } from "firebase/auth";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AuthUser } from "types/auth";

import { auth } from "../firebase";

type AuthContextType = {
  isAuthenticating: boolean;
  authenticatedUser: AuthUser | null;
  userIsAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticating: false,
  authenticatedUser: null,
  userIsAuthenticated: false,
});

function AuthContextProvider(props: PropsWithChildren): JSX.Element {
  const [isAuthenticating, setIsAuthenticating] = useState<AuthContextType["isAuthenticating"]>(false);
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthContextType["authenticatedUser"]>(null);
  const [userIsAuthenticated, setUserIsAuthenticated] = useState<AuthContextType["userIsAuthenticated"]>(false);

  useEffect(() => {
    setIsAuthenticating(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      //   console.log("a", a);
      //   console.log("b", b);
      //   console.log("c", c);
      setAuthenticatedUser(user);
      setIsAuthenticating(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setUserIsAuthenticated(Boolean(authenticatedUser));
  }, [authenticatedUser]);

  return (
    <AuthContext.Provider value={{ isAuthenticating, authenticatedUser, userIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

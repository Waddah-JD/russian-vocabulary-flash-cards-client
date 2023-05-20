import { onAuthStateChanged } from "firebase/auth";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AuthUser } from "types/auth";

import { auth } from "../firebase";

type AuthContextType = {
  isAuthenticating: boolean | null;
  authenticatedUser: AuthUser | null;
  userIsAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticating: false,
  authenticatedUser: null,
  userIsAuthenticated: false,
});

function AuthContextProvider(props: PropsWithChildren): JSX.Element {
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthContextType["authenticatedUser"]>(null);
  const [userIsAuthenticated, setUserIsAuthenticated] = useState<AuthContextType["userIsAuthenticated"]>(false);
  const [isAuthenticating, setIsAuthenticating] = useState<AuthContextType["isAuthenticating"]>(null);

  useEffect(() => {
    setIsAuthenticating(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticating(false);
      setAuthenticatedUser(user);
      setUserIsAuthenticated(Boolean(user));
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticating, authenticatedUser, userIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

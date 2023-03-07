import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, FC, useEffect, useState } from "react";
import { ReactProps } from "src/types";

import { auth } from "../firebase";

interface AuthContextType {
  token: string | null;
}

const AuthContext = createContext<AuthContextType>({ token: null });

export const AuthContextProvider: FC<ReactProps> = (props) => {
  const [token, setToken] = useState<AuthContextType["token"]>(null);

  useEffect(() => {
    async function signIn() {
      const signInResult = await signInWithEmailAndPassword(auth, "", "");

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: accessToken actually exists on user
      const accessToken = signInResult.user.accessToken;
      console.log(accessToken);

      setToken(accessToken);
    }

    signIn();
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {props.children}
    </AuthContext.Provider>
  );
};

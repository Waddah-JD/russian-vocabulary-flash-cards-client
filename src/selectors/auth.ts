import { RootState } from "src/store";

export const selectUserIsAuthenticated = (state: RootState) => Boolean(state.auth.uid);

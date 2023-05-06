import { RootState } from "src/store";

export function selectUserIsAuthenticated(state: RootState) {
  return Boolean(state.auth.uid);
}

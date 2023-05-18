import { RootState } from "src/store";

export function selectUserIsAuthenticated(state: RootState): boolean {
  return Boolean(state.auth.uid);
}

export function selectUserAuthStateIsLoading(state: RootState): boolean {
  return state.auth.isLoading;
}

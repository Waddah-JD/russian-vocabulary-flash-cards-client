import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SignInState = {
  username: string;
  password: string;
  isLoading: boolean;
};

const initialState: SignInState = {
  username: "",
  password: "",
  isLoading: false,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState: initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export default signInSlice;

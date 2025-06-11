import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      console.log("Dispatching login action with:", { email, password });
      console.log("Login action payload:", action.payload);
      console.log("action login true", email);
      state.user.email = email;
      state.user.password = password;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user.email = "";
      state.user.password = "";
      console.log("action login true", "");
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

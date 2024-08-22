import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  token: localStorage.getItem("x-auth-token"),
  user: localStorage.getItem("user-data"),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("x-auth-token", action.payload.token);
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user-data", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("x-auth-token");
      localStorage.removeItem("user-data");
    },
  },
});

export const { logout, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;

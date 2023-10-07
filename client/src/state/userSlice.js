import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: JSON.parse(localStorage.getItem("user"))?.user || {},
  token: JSON.parse(localStorage.getItem("user"))?.token || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout(state) {
      state.user = {};
      state.token = "";

      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

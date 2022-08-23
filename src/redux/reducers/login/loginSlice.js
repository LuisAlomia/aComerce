import { createSlice } from "@reduxjs/toolkit";

const localUser = JSON.parse(localStorage.getItem("token")) || "";

let initialState = localUser;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import login from "./reducers/login/loginSlice";
import cart from "./reducers/cart/cartSlice";

export const store = configureStore({
  reducer: {
    login,
    cart,
  },
});

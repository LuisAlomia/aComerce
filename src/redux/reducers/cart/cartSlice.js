import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      const newState = [...state, action.payload];
      const set = new Set(newState.map(JSON.stringify));
      const porchase = Array.from(set).map(JSON.parse);
      return porchase;
    },
    deleteCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    resetCart: (state, action) => {
      return (state = []);
    },
  },
});

export const { setCart, deleteCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

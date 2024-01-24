import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    add(state, action) {
      console.log("user added to cart", action.payload.title);
      console.log("action", action.payload);
      return [...state, action.payload];
    },
    remove(state, action) {
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

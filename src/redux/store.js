import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    Users: userSlice,
    Carts: cartSlice,
  },
});
export default store;

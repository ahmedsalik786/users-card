import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSilce = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUser(state, action) {
      console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export const { fetchUser } = userSilce.actions;
export default userSilce.reducer;

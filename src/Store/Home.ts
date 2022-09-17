import { createSlice } from "@reduxjs/toolkit";

export const home = createSlice({
  name: "home",
  initialState: {
    isLoading: false,
  },
  reducers: {
    changeValue: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { changeValue } = home.actions;

export default home.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
  },
  reducers: {},
  extraReducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;

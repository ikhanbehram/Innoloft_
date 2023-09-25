import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./product.thunk";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    user: {
      name: null,
      email: null,
      postion: null,
      profilePicture: null,
    },
    product: {
      type: null,
      name: null,
      picture: null,
      description: null,
    },
    offerDetails: null,
    company: {
      address: null,
      logo: null,
      name: null
    },
    categories: null,
    video: null,
  },
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user.name = payload.user.firstName + " " + payload.user.lastName;
      state.user.position = payload.user.position;
      state.user.email = payload.user.email;
      state.user.profilePicture = payload.user.profilePicture;
      state.product.type = payload.type;
      state.product.name = payload.name;
      state.product.picture = payload.picture;
      state.product.description = payload.description;
      state.offerDetails = {
        trl: payload.trl,
        businessModels: payload.businessModels,
        costs: payload.investmentEffort,
        categories: payload.categories,
      };
      state.video = payload.video;
      state.company.address = payload.company.address;
      state.company.name = payload.company.name;
      state.company.logo = payload.company.logo;
    },
    [getProduct.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;

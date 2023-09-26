import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://api-test.innoloft.com";

export const getProduct = createAsyncThunk("GET_PRODUCT", async (productId) => {
  try {
    const res = await fetch(`${BASE_URL}/product/${productId}/`);
    const responseBody = await res.json();
    return responseBody;
  } catch (e) {
    throw e;
  }
});


export const editProduct = createAsyncThunk("EDIT_PRODUCT", async (body) => {
    try {
      const res = await fetch(`${BASE_URL}/product/${productId}/`);
      const responseBody = await res.json();
      return responseBody;
    } catch (e) {
      throw e;
    }
  });
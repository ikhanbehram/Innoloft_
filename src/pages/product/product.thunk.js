import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";

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
    const res = await fetch(`${BASE_URL}/product/${body.id}/`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    return res;
  } catch (e) {
    throw e;
  }
});

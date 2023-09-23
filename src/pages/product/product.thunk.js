import { createAsyncThunk } from "@reduxjs/toolkit";

const getProduct = createAsyncThunk("GET_PRODUCT", async (id)=>{
    const product = await fetch();
});
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { productSlice } from '../pages/product/product.slice';

const reducers = combineReducers({
  product: productSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: [thunkMiddleware],
});

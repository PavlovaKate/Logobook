import * as api from './api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cart, CartLine } from './type/type';
import { UserId } from '../Auth/type/type';


type CartsReducer = {
  carts: Cart[];
  message: string | undefined,
  errors: string | undefined
};

const initialState: CartsReducer = {
  carts: [],
  message: undefined,
  errors: undefined
};

export const loadCarts = createAsyncThunk('carts/load', (id: UserId) => api.axiosCarts(id));
export const deleteCart = createAsyncThunk('cart/delete', (id: Cart['id']) => api.axiosDeleteCart(id));
export const updateCartLine = createAsyncThunk('cartLine/update', ({ cartline, action }: { cartline: CartLine, action: string }) => api.axiosUpdateCartLine({ cartline, action }));
export const deleteCartLine = createAsyncThunk('cartLine/delete', (id: CartLine['id']) => api.axiosDeleteCartLine(id));

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loadCarts.fulfilled, (state, action) => {
        action.payload.carts.map(cart => cart.CartLines.sort((a,b)=> a.id - b.id));
        state.carts = action.payload.carts;
        state.message = action.payload.message;
      })
      .addCase(loadCarts.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.carts = action.payload.carts;
        state.message = action.payload.message;
      })
      .addCase(updateCartLine.fulfilled, (state, action) => {
        action.payload.carts.map(cart => cart.CartLines.sort((a,b)=> a.id - b.id));
        state.carts = action.payload.carts
        state.message = action.payload.message;
      })
      .addCase(deleteCartLine.fulfilled, (state, action) => {
        state.carts = action.payload.carts;
        state.message = action.payload.message;
      })
  },
});

export default cartsSlice.reducer;
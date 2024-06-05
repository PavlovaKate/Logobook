import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { Category } from './type/type';

type BooksReducer = {
  categories: Category[];
  message: string | undefined;
  errors: string | undefined;
};

const initialState: BooksReducer = {
  categories: [],
  message: undefined,
  errors: undefined,
};

export const loadCategories = createAsyncThunk('categories/load', () => api.axiosCategories());

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.message = action.payload.message;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.errors = action.error.message;
      })
  },
});

export default booksSlice.reducer;

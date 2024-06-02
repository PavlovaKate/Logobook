import * as api from './api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Book, BookId } from './type/type';

type BooksReducer = {
  books: Book[];
  message: string | undefined;
  errors: string | undefined;
};

const initialState: BooksReducer = {
  books: [],
  message: undefined,
  errors: undefined
};

export const loadBooks = createAsyncThunk('books/load', () => api.axiosBooks());

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.books = action.payload.books;
        state.message = action.payload.message;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      // .addCase(addPlaces.fulfilled, (state, action) => {
      //   state.places.push(action.payload.place);
      // })
      // .addCase(addPlaces.rejected, (state, action) => {
      //   state.errors = action.error.message;
      // })
      // .addCase(deletePlaces.fulfilled, (state, action) => {
      //   state.places = state.places.filter((place) => place.id !== action.payload.id);
      // })
      // .addCase(deletePlaces.rejected, (state, action) => {
      //   state.errors = action.error.message;
      // });
  },
});

export default booksSlice.reducer;
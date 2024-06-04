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
export const updateFavourite = createAsyncThunk('favourite/update', (id: BookId) => api.axiosUpdateFavourite(id));

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
      .addCase(updateFavourite.fulfilled, (state, action) => {
        let books;
        action.payload.message === 'destroy' ? books = state.books.map((book) => {
          if (book.id === action.payload.favourite.bookId) {
             console.log(action.payload.favourite.id);
            book.Favourites = book.Favourites.filter((fav) => fav.id !== action.payload.favourite.id)
          }
          return book
        }) : books = state.books.map((book) => {
          if (book.id === action.payload.favourite.bookId) {
            book.Favourites.push(action.payload.favourite)
          }
          return book
        });

        state.books = books;
        state.message = action.payload.message;
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
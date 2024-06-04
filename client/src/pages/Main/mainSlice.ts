/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { Book, BookId, Review } from './type/type';

type BooksReducer = {
  books: Book[];
  message: string | undefined;
  errors: string | undefined;
  isLoading: boolean;
  review: Review | {};
};

const initialState: BooksReducer = {
  books: [],
  message: undefined,
  errors: undefined,
  isLoading: true,
  review: {},
};

export const loadBooks = createAsyncThunk('books/load', () => api.axiosBooks());
export const updateFavourite = createAsyncThunk('favourite/update', (id: BookId) =>
  api.axiosUpdateFavourite(id),
);

export const loadReview = createAsyncThunk('review/add', (review: Review) =>
  api.reviewAxios(review),
);
export const addToCart = createAsyncThunk('books/addToCart', (id: BookId) => api.axiosAddToCart(id));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.isLoading = false;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
  },
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
        action.payload.message === 'destroy'
          ? (books = state.books.map((book) => {
            if (book.id === action.payload.favourite.bookId) {
              book.Favourites = book.Favourites.filter(
                (fav) => fav.id !== action.payload.favourite.id,
              );
            }
            return book;
          }))
          : (books = state.books.map((book) => {
            if (book.id === action.payload.favourite.bookId) {
              book.Favourites.push(action.payload.favourite);
            }
            return book;
          }));

        state.books = books;
        state.message = action.payload.message;
      })
      .addCase(loadReview.fulfilled, (state, action) => {
        state.books = state.books.map((book) => {
          if (book.id === action.payload.bookId) {
            book.Reviews.push(action.payload);
          }
          return book;
        });
        state.review = action.payload.review;
      })
      .addCase(loadReview.rejected, (state, action) => {
        state.errors = action.error.message;
      });
      .addCase(addToCart.fulfilled, (state, action) => {
        let books;
        action.payload.message === 'create' ? books = state.books.map((book) => {
          if (book.id === action.payload.cartline.bookId) {
            book.CartLines.push(action.payload.cartline)
          }
          return book
        }) : books = state.books.map((book) => {
          book.CartLines.map((cartline) => {
            if (cartline.id === action.payload.cartline.id) cartline.count += 1;
            return cartline
          })
          return book
        })
        state.books = books;
        state.message = action.payload.message;
      })
  },
});

export const { startLoading, stopLoading } = booksSlice.actions;

export default booksSlice.reducer;

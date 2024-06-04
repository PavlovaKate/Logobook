// import * as api from './api';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { Book, BookId } from '../Main/type/type';

// type BookmarkReducer = {
//   books: Book[];
//   message: string | undefined,
//   errors: string | undefined
// };

// const initialState: BookmarkReducer = {
//   books: [],
//   message: undefined,
//   errors: undefined
// };

// export const updateFavourite = createAsyncThunk('favourite/update', (id: BookId) => api.axiosUpdateFavourite(id));

// const bookSlice = createSlice({
//   name: 'carts',
//   initialState,
//   reducers: {},
//   extraReducers: (build) => {
//     build
//       .addCase(updateFavourite.fulfilled, (state, action) => {
//         state.books = action.payload.books;
//         state.message = action.payload.message;
//       })
//   },
// });

// export default cartsSlice.reducer;
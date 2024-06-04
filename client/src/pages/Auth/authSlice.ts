import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UserLogo, UserWithoutId, UsersState } from './type/type';
import * as api from './api';

const initialState: UsersState = {
  user: undefined,
  users: [],
  errors: undefined,
};

export const loadUser = createAsyncThunk('users/add', (user: UserWithoutId) => api.userAxios(user));
export const loginUser = createAsyncThunk('users/login', (user: UserLogo) =>
  api.userLoginAxios(user),
);
export const logoutUser = createAsyncThunk('users/logout', () => api.userLogOutAxios());
export const checkedUser = createAsyncThunk('users/check', () => api.userCheckAxios());
export const loadUsers = createAsyncThunk('users/load', () => api.usersAllAxios());

const authSluce = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      .addCase(checkedUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(checkedUser.rejected, (state, action) => {
        state.errors = action.error.message;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.errors = action.error.message;
      });
  },
});

export default authSluce.reducer;

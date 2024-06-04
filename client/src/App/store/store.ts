import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../pages/Auth/authSlice';
import bookSlice from '../../pages/Main/mainSlice';
import cartSlice from '../../pages/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    book: bookSlice,
    cart: cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const LOCAL_STORAGE_THEME_KEY = 'theme';

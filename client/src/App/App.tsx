import React, { useEffect } from 'react';
import './App.css';
// import type { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './provider/AppRoutes';
import NavBar from '../pages/Navbar/NavBar';
import { RootState, useAppDispatch } from './store/store';
// import { request } from '../services/axiosInstance';
import { checkedUser } from '../pages/Auth/authSlice';
import { loadBooks } from '../pages/Main/mainSlice';
import { useSelector } from 'react-redux';
import { loadCarts } from '../pages/Cart/cartSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const axiosCheck = async (): Promise<void> => {
    dispatch(checkedUser());

    // const { data }: AxiosResponse<UsersResponse> = await request.get('/tokens/refresh');

    // if (data.message === 'success') {
    //   setAccessToken(data.accessToken);
    //   dispatch({ type: 'users/check', payload: data.user });
    // }
  };

  useEffect(() => {
    axiosCheck().catch(console.log);
    dispatch(loadBooks()).catch(console.log);
  }, [dispatch]);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <AppRoutes />
    </div>
  );
}

export default App;

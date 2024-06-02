import React, { useEffect } from 'react';
import './App.css';
// import type { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './provider/AppRoutes';
import NavBar from '../pages/Navbar/NavBar';
import { useAppDispatch } from './store/store';
// import { request } from '../services/axiosInstance';
import { checkedUser } from '../pages/Auth/authSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const axiosCheck = async (): Promise<void> => {
    const action = await dispatch(checkedUser());
    if (action.type === 'users/login/fulfilled') {
      navigate('/');
    }

    // const { data }: AxiosResponse<UsersResponse> = await request.get('/tokens/refresh');

    // if (data.message === 'success') {
    //   setAccessToken(data.accessToken);
    //   dispatch({ type: 'users/check', payload: data.user });
    // }
  };

  useEffect(() => {
    axiosCheck().catch(console.log);
  }, [dispatch]);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <AppRoutes />
    </div>
  );
}

export default App;

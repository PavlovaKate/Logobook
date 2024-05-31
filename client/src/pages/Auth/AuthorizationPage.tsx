/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import './auth.css';
import type { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { request, setAccessToken } from '../../services/axiosInstance';
import { useAppDispatch } from '../../App/store/store';
import type { UsersResponse } from './type/type';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const { data }: AxiosResponse<UsersResponse> = await request.post('/users/login', {
      email,
      password,
    });
    if (data.message === 'success') {
      setAccessToken(data.accessToken);
      dispatch({ type: 'users/login', payload: data.user });
      navigate('/');
    }
  };

  return (
    <div>
      <form onSubmit={onHadleSubmit}>
        <input
          type="login"
          name="login"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;

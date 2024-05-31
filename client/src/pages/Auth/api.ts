import type { AxiosResponse } from 'axios';

import { request, setAccessToken } from '../../services/axiosInstance';
import type { User, UserWithoutId, UsersResponse } from './type/type';

export const userAxios = async (user: UserWithoutId): Promise<User | undefined> => {
  const { data }: AxiosResponse<UsersResponse> = await request.post('/users', user);

  if (data.message === 'success') {
    setAccessToken(data.accessToken);
    return data.user;
  }
};

export const userLoginAxios = async (user: UserWithoutId): Promise<User | undefined> => {
  const { data }: AxiosResponse<UsersResponse> = await request.post('/users/login', user);

  if (data.message === 'success') {
    setAccessToken(data.accessToken);
    return data.user;
  }
};

export const userLogOutAxios = async (): Promise<void> => {
  const { data }: AxiosResponse<{ message: string }> = await request.get('/users/logout');
  if (data.message === 'success') {
    window.location.href = '/';
  }
};

export const userCheckAxios = async (): Promise<User | undefined> => {
  const { data }: AxiosResponse<UsersResponse> = await request.get('/tokens/refresh');

  if (data.message === 'success') {
    setAccessToken(data.accessToken);
    return data.user;
  }
};

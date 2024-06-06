/* eslint-disable consistent-return */
import type { AxiosResponse } from 'axios';

import { request, setAccessToken } from '../../services/axiosInstance';
import type { User, UserEdit, UserLogo, UserWithoutId, UsersResponse } from './type/type';

export const userAxios = async (user: UserWithoutId): Promise<User | undefined> => {
  const { data }: AxiosResponse<UsersResponse> = await request.post('/users', user);

  if (data.message === 'success') {
    setAccessToken(data.accessToken);
    return data.user;
  }
};

export const userLoginAxios = async (user: UserLogo): Promise<User | undefined> => {
  const { data }: AxiosResponse<UsersResponse> = await request.post('/users/login', user);

  if (data.message === 'success') {
    setAccessToken(data.accessToken);
    return data.user;
  }
};

export const userLogOutAxios = async (): Promise<void> => {
  const { data }: AxiosResponse<{ message: string }> = await request.get('/users/logout');
  if (data.message === 'success') {
    // window.location.href = '/';
  }
};

export const userCheckAxios = async (): Promise<User | undefined> => {
  const { data }: AxiosResponse<UsersResponse> = await request.get('/tokens/refresh');

  if (data.message === 'success') {
    setAccessToken(data.accessToken);
    return data.user;
  }
};

export const usersAllAxios = async (): Promise<{ message: string; users: User[] }> => {
  const { data }: AxiosResponse<{ message: string; users: User[] }> =
    await request.get('/users/all');
  return data;
};

export const userUpdateAxios = async (user: UserEdit): Promise<User | undefined> => {
  const { data }: AxiosResponse<{ message: string; user: User }> = await request.put(
    `/users/update/${user.id}`,
    user,
  );
  if (data.message === 'success') {
    return data.user;
  }
};

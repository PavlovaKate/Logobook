import type { AxiosResponse } from 'axios';
import { request } from '../../services/axiosInstance';
import type { Cart, CartLine } from './type/type';
import { UserId } from '../Auth/type/type';

export const axiosCarts = async (id: UserId): Promise<{ message: string; carts: Cart[] }> => {
  const response: AxiosResponse<{ message: string; carts: Cart[] }> =
    await request.get(`/carts/${id}`);
  return response.data;
};

export const axiosDeleteCart = async (id: Cart['id']): Promise<{ message: string, carts: Cart[] }> => {
  const response: AxiosResponse<{ message: string, carts: Cart[] }> =
    await request.delete(`/carts/${id}`);
  return response.data;
};

export const axiosUpdateCart = async (id: Cart['id']): Promise<{ message: string, carts: Cart[] }> => {
  const response: AxiosResponse<{ message: string, carts: Cart[] }> =
    await request.put(`/carts/${id}`);
  return response.data;
};

export const axiosUpdateCartLine = async ({ cartline, action }: { cartline: CartLine, action: string }): Promise<{ message: string, carts: Cart[] }> => {
  const response: AxiosResponse<{ message: string, carts: Cart[] }> =
    await request.put(`/carts/cartLine/${cartline.id}`, { cartline, action });
  return response.data;
};

export const axiosDeleteCartLine = async (id: CartLine['id']): Promise<{ message: string, carts: Cart[] }> => {
  const response: AxiosResponse<{ message: string, carts: Cart[] }> =
    await request.delete(`/carts/cartLine/${id}`);
  return response.data;
};

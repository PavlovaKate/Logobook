import type { AxiosResponse } from 'axios';
import { request } from '../../services/axiosInstance';
import { Category } from './type/type';

export const axiosCategories = async (): Promise<{ message: string; categories: Category[] }> => {
  const response: AxiosResponse<{ message: string; categories: Category[] }> = await request.get('/categories');
  return response.data;
};
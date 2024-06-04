import type { AxiosResponse } from 'axios';
import { request } from '../../services/axiosInstance';
import type { Book, BookId, Fav } from './type/type';
import { CartLine } from '../Cart/type/type';

export const axiosBooks = async (): Promise<{ message: string; books: Book[] }> => {
  const response: AxiosResponse<{ message: string; books: Book[] }> = await request.get('/books');
  return response.data;
};

export const axiosUpdateFavourite = async (
  id: BookId,
): Promise<{ message: string; favourite: Fav }> => {
  const response: AxiosResponse<{ message: string; favourite: Fav }> = await request.put(
    `/favourites/${id}`,
  );
  return response.data;
};

export const axiosAddToCart = async (id: BookId): Promise<{ message: string, cartline: CartLine }> => {
  const response: AxiosResponse<{ message: string, cartline: CartLine }> =
    await request.post(`/books/addToCart/${id}`);
  return response.data;
};

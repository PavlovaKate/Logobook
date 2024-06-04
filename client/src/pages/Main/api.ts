import type { AxiosResponse } from 'axios';
import { request } from '../../services/axiosInstance';
import type { Book, BookId, Fav } from './type/type';

export const axiosBooks = async (): Promise<{ message: string; books: Book[] }> => {
  const response: AxiosResponse<{ message: string; books: Book[] }> =
    await request.get('/books');
  return response.data;
};

export const axiosUpdateFavourite = async (id: BookId): Promise<{ message: string; favourite: Fav }> => {
  const response: AxiosResponse<{ message: string; favourite: Fav }> =
    await request.put(`/favourites/${id}`);
  return response.data;
};
// export const axiosAddPlaces = async (
//   place: Omit<Place, 'id'>,
// ): Promise<{ message: string; place: Place }> => {
//   const response: AxiosResponse<{ message: 'success'; place: Place }> = await request.post(
//     '/places',
//     place,
//   );
//   return response.data;
// };

// export const axiosPlaceDelete = async (id: PlaceId): Promise<{ message: string; id: PlaceId }> => {
//   const response: AxiosResponse<{ message: string }> = await request.delete(`/places/${id}`);
//   return { message: response.data.message, id };
// };
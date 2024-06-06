import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import axios from 'axios';

export const request = axios.create({
  baseURL: '/api',
  withCredentials: true,
  // headers: {}
});

let accessToken: string = '';

function setAccessToken(token: string): void {
  accessToken = token;
}

// перехватчик ответа
request.interceptors.request.use((config: AxiosRequestConfig<>): AxiosRequestConfig => {
  if (!config.headers) {
    config.headers = {};
  }
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// перехватчик запроса
request.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosResponse | Promise<never>> => {
    const prevRequest: AxiosRequestConfig & { sent?: boolean } = error.config;
    if (error.response && error.response.status === 403 && !prevRequest.sent) {
      const response: AxiosResponse<{ accessToken: string }> = await request.get('/tokens/refresh');
      accessToken = response.data.accessToken;
      prevRequest.sent = true;
      if (!prevRequest.headers) {
        prevRequest.headers = {};
      }
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return request(prevRequest);
    }
    return Promise.reject(error);
  },
);

export { setAccessToken };

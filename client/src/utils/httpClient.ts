import { RootStore } from '@/stores/root.store';
import axios, { AxiosError, AxiosRequestConfig, AxiosStatic } from 'axios';
import errorHandler from './errorHandler';

export type HttpClientRequestConfig = {
  url: string;
  method: string;
  data?: any;
  isAuth?: boolean;
};

export interface IHttpClient {
  baseUrl: string;
  request<T>(config: HttpClientRequestConfig): Promise<T | null>;
  setAccessToken: (accessToken: string) => void;
}

class CustomHttpClient implements IHttpClient {
  private axios: AxiosStatic;
  private rootStore: RootStore;
  baseUrl: string;

  constructor({
    baseUrl,
    rootStore,
  }: {
    baseUrl: string;
    rootStore: RootStore;
  }) {
    this.axios = axios;
    this.baseUrl = baseUrl;
    this.rootStore = rootStore;

    axios.defaults.baseURL = this.baseUrl;
  }

  async request<T>({
    url,
    method,
    data,
    isAuth = true,
  }: HttpClientRequestConfig) {
    let requestConfig: AxiosRequestConfig = { url, method };

    if (data) {
      requestConfig = { ...requestConfig, data };
    }

    if (isAuth) {
      const { auth } = this.rootStore.authStore;

      requestConfig = {
        ...requestConfig,
        headers: { Authorization: auth.accessToken },
      };
    }

    try {
      const res = await this.axios.request<T>(requestConfig);

      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const msg =
          (err as AxiosError).response?.data?.message ??
          err.response?.statusText;
        errorHandler.handle(msg, 'error');
      }
    }

    return null;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }
}

export default CustomHttpClient;

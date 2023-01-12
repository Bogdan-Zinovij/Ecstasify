import { RootStore } from '@/stores/root.store';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
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
}

class CustomHttpClient implements IHttpClient {
  private axios: AxiosInstance;
  private rootStore: RootStore;
  baseUrl: string;

  constructor({
    baseUrl,
    rootStore,
  }: {
    baseUrl: string;
    rootStore: RootStore;
  }) {
    this.axios = axios.create();
    this.baseUrl = baseUrl;
    this.rootStore = rootStore;

    this.registerInterceptors();
  }

  private registerInterceptors() {
    this.axios.interceptors.response.use(
      (response) => response,
      async (err) => {
        const axiosError = err as AxiosError;
        const originalRequest = axiosError.config as AxiosRequestConfig & {
          sent: boolean;
        };

        if (!axiosError?.response || !originalRequest)
          return Promise.reject(err);

        if (axiosError?.response?.status === 401 && !originalRequest.sent) {
          originalRequest.sent = true;

          try {
            const accessToken = await this.rootStore.authStore.refreshAuth();
            const tokenType = 'Bearer';

            if (accessToken) {
              return this.axios.request({
                ...originalRequest,
                headers: {
                  ...originalRequest.headers,
                  Authorization: `${tokenType} ${accessToken}`,
                },
              });
            }
          } catch (err) {
            return null;
          }
        } else {
          return Promise.reject(err);
        }
      }
    );
  }

  async request<T>({
    url,
    method,
    data,
    isAuth = true,
  }: HttpClientRequestConfig) {
    let requestConfig: AxiosRequestConfig = { url: this.baseUrl + url, method };

    if (data) {
      requestConfig = { ...requestConfig, data };
    }

    if (isAuth) {
      const { auth } = this.rootStore.authStore;
      const tokenType = 'Bearer';

      requestConfig = {
        ...requestConfig,
        headers: { Authorization: `${tokenType} ${auth.accessToken}` },
      };
    }

    try {
      const res = await this.axios.request<T>(requestConfig);

      return res?.data;
    } catch (err) {
      const { response } = err as AxiosError<{
        message?: string;
        errors?: { msg: string }[];
      }>;

      const messages = [];

      if (response?.data?.message) {
        messages.push(response?.data?.message);
      } else if (response?.data?.errors) {
        for (const error of response?.data?.errors ?? []) {
          messages.push(error.msg);
        }
      } else {
        messages.push('An unknown error occured!');
      }

      for (const message of messages) {
        errorHandler.handle(message, 'error');
      }
    }

    return null;
  }
}

export default CustomHttpClient;

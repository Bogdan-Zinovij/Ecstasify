import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';

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
  private accessToken: string | null = null;
  baseUrl: string;

  constructor(baseUrl: string) {
    this.axios = axios;
    this.baseUrl = baseUrl;

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
      requestConfig = {
        ...requestConfig,
        headers: { Authorization: this.accessToken },
      };
    }

    try {
      const res = await this.axios.request<T>(requestConfig);

      return res.data;
    } catch (err) {
      console.log(err);
    }

    return null;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }
}

export default CustomHttpClient;

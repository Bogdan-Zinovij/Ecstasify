import axios, { AxiosStatic } from 'axios';

export class HttpRequest {
  private httpClient: AxiosStatic;

  constructor(httpClient: AxiosStatic) {
    this.httpClient = httpClient;
  }

  get<T>(url: string) {
    return this.httpClient.request<T>({
      url,
      method: 'GET',
    });
  }

  post<T>(url: string, data: T) {
    return this.httpClient.request<T>({ url, method: 'POST', data });
  }

  patch<T>(url: string, data: T) {
    return this.httpClient.request({ url, method: 'PATCH', data });
  }

  delete<T = void>(url: string) {
    return this.httpClient.request<T>({ url, method: 'DELETE' });
  }
}

axios.defaults.baseURL = '/api/v1';

export default new HttpRequest(axios);

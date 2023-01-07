import { IHttpClient, HttpClientRequestConfig } from './httpClient';

export class HttpRequest {
  private httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  setHttpClientAccessToken(accessToken: string) {
    this.httpClient.setAccessToken(accessToken);
  }

  get<T>(url: string) {
    return this.httpClient.request<T>({
      url,
      method: 'GET',
    });
  }

  post<T>(url: string, data: HttpClientRequestConfig['data']) {
    return this.httpClient.request<T>({ url, method: 'POST', data });
  }

  patch<T>(url: string, data: HttpClientRequestConfig['data']) {
    return this.httpClient.request<T>({ url, method: 'PATCH', data });
  }

  delete<T>(url: string) {
    return this.httpClient.request<T>({ url, method: 'DELETE' });
  }
}

export default HttpRequest;

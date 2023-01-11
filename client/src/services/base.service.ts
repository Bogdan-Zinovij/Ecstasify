import CustomHttpClient from '@/utils/httpClient';
import { HttpRequest } from '@/utils/request';

class BaseService {
  httpRequest: HttpRequest;

  constructor() {
    this.httpRequest = new HttpRequest(new CustomHttpClient('/api/v1'));
  }
}

export default BaseService;

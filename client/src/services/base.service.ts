import { HttpRequest } from '@/utils/request';

class BaseService {
  httpRequest: HttpRequest;

  constructor(httpRequest: HttpRequest) {
    this.httpRequest = httpRequest;
  }
}

export default BaseService;

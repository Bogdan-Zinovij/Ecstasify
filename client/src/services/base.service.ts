import { HttpRequest } from '@/utils/httpRequest';

class BaseService {
  httpRequest: HttpRequest;

  constructor(httpRequest: HttpRequest) {
    this.httpRequest = httpRequest;
  }
}

export default BaseService;

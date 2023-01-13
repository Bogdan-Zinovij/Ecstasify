import { Subscription } from '@/models/subscription';
import BaseService from './base.service';

class SubscriptionsService extends BaseService {
  getAllSubscriptions = () => {
    return this.httpRequest.get<Subscription[]>(
      '/subscriptions/subscriptions-plans'
    );
  };
}

export default SubscriptionsService;

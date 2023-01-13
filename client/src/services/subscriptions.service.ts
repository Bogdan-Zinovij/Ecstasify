import { Subscription } from '@/models/subscription';
import BaseService from './base.service';

class SubscriptionsService extends BaseService {
  getAllSubscriptions = () => {
    return this.httpRequest.get<Subscription[]>(
      '/subscriptions/subscription-plans'
    );
  };
}

export default SubscriptionsService;

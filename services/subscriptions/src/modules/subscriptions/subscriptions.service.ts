import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionsService {
  selectAll() {
    return [
      {
        id: '20e554dd-397e-4126-8249-561168ac7486',
        name: 'free',
        price: 0,
      },
      {
        id: 'ca972259-f6fd-4b7b-b78f-968d379543f9',
        name: 'silver',
        price: 20,
      },
      {
        id: '15fb20f7-7031-4f57-8001-ee20ad7e88da',
        name: 'golden',
        price: 50,
      },
    ];
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessagesEnum } from 'src/common';
import { ServiceErrorMessagesInterface } from 'src/common/interfaces';
import { BaseService } from 'src/common/services';
import { Repository } from 'typeorm';
import { SubscriptionFeatureEntity } from '../entities';

const serviceErrorMessages: ServiceErrorMessagesInterface = {
  entitiesNotFound: ErrorMessagesEnum.SUBSCRIPTION_FEATURES_NOT_FOUND,
  entityNotFound: ErrorMessagesEnum.SUBSCRIPTION_FEATURE_NOT_FOUND,
  inputDataError: ErrorMessagesEnum.INPUT_DATA_ERROR,
};

@Injectable()
export class SubscriptionFeaturesService extends BaseService<SubscriptionFeatureEntity> {
  constructor(
    @InjectRepository(SubscriptionFeatureEntity)
    subscriptionFeatureEntityRepository: Repository<SubscriptionFeatureEntity>,
  ) {
    super(subscriptionFeatureEntityRepository, serviceErrorMessages);
  }
}

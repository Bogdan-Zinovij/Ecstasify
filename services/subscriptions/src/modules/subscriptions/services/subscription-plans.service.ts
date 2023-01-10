import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessagesEnum } from 'src/common';
import { ServiceErrorMessagesInterface } from 'src/common/interfaces';
import { BaseService } from 'src/common/services';
import { Repository } from 'typeorm';
import { SubscriptionPlanEntity } from '../entities';

const serviceErrorMessages: ServiceErrorMessagesInterface = {
  entitiesNotFound: ErrorMessagesEnum.SUBSCRIPTION_PLANS_NOT_FOUND,
  entityNotFound: ErrorMessagesEnum.SUBSCRIPTION_PLAN_NOT_FOUND,
  inputDataError: ErrorMessagesEnum.INPUT_DATA_ERROR,
};

@Injectable()
export class SubscriptionPlansService extends BaseService<SubscriptionPlanEntity> {
  constructor(
    @InjectRepository(SubscriptionPlanEntity)
    subscriptionPlanEntityRepository: Repository<SubscriptionPlanEntity>,
  ) {
    super(subscriptionPlanEntityRepository, serviceErrorMessages);
  }
}

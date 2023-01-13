import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessagesEnum } from 'src/common';
import { ServiceErrorMessagesInterface } from 'src/common/interfaces';
import { BaseService } from 'src/common/services';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
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

  findAll(
    options?: FindManyOptions<SubscriptionPlanEntity>,
  ): Promise<SubscriptionPlanEntity[]> {
    const qb = this.getSelectQueryBuilder(options);

    return qb.getMany().catch(() => {
      throw new NotFoundException(this.serviceErrorMessages.entitiesNotFound);
    });
  }

  findOne(
    conditions: FindOptionsWhere<SubscriptionPlanEntity>,
  ): Promise<SubscriptionPlanEntity> {
    const qb = this.getSelectQueryBuilder({
      where: conditions,
      loadEagerRelations: true,
    });

    return qb.getOneOrFail().catch(() => {
      throw new NotFoundException(this.serviceErrorMessages.entityNotFound);
    });
  }

  public getSelectQueryBuilder(
    options: FindManyOptions<SubscriptionPlanEntity> = {
      loadEagerRelations: true,
    },
  ) {
    const alias = this.entityRepository.metadata.name;
    const qb = this.entityRepository.createQueryBuilder(alias);

    if (options) qb.setFindOptions(options);
    if (options?.loadEagerRelations) {
      qb.leftJoinAndSelect(
        'SubscriptionPlanEntity.subscriptionFeatures',
        'SubscriptionPlanEntity_subscriptionFeatures',
      );
      qb.leftJoinAndSelect(
        'SubscriptionPlanEntity_subscriptionFeatures.feature',
        'SubscriptionPlanEntity_subscriptionFeatures_feature',
      );
    }

    return qb;
  }
}

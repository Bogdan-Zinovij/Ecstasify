import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessagesEnum } from 'src/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { SubscriptionPlanEntity } from '../entities';

@Injectable()
export class SubscriptionPlansService {
  constructor(
    @InjectRepository(SubscriptionPlanEntity)
    private readonly subscriptionPlanEntityRepository: Repository<SubscriptionPlanEntity>,
  ) {}

  findAll(): Promise<SubscriptionPlanEntity[]> {
    return this.subscriptionPlanEntityRepository.find().catch(() => {
      throw new NotFoundException(
        ErrorMessagesEnum.SUBSCRIPTION_PLANS_NOT_FOUND,
      );
    });
  }

  findOne(
    conditions: FindOptionsWhere<SubscriptionPlanEntity>,
  ): Promise<SubscriptionPlanEntity> {
    return this.subscriptionPlanEntityRepository
      .findOne({
        where: conditions,
      })
      .catch(() => {
        throw new NotFoundException(
          ErrorMessagesEnum.SUBSCRIPTION_PLAN_NOT_FOUND,
        );
      });
  }

  async createOne(
    entity: Partial<SubscriptionPlanEntity>,
  ): Promise<SubscriptionPlanEntity> {
    const createdEntity = this.subscriptionPlanEntityRepository.create(entity);
    const { id } = await this.subscriptionPlanEntityRepository
      .save(createdEntity)
      .catch(() => {
        throw new BadRequestException(ErrorMessagesEnum.INPUT_DATA_ERROR);
      });
    return this.findOne({ id });
  }

  async updateOne(
    conditions: FindOptionsWhere<SubscriptionPlanEntity>,
    entity: Partial<SubscriptionPlanEntity>,
  ): Promise<SubscriptionPlanEntity> {
    const entityToUpdate = await this.findOne(conditions);
    const updatedEntity = this.subscriptionPlanEntityRepository.merge(
      entityToUpdate,
      entity,
    );
    const { id } = await this.subscriptionPlanEntityRepository
      .save(updatedEntity)
      .catch(() => {
        throw new BadRequestException(ErrorMessagesEnum.INPUT_DATA_ERROR);
      });
    return this.findOne({ id });
  }

  async deleteOne(
    conditions: FindOptionsWhere<SubscriptionPlanEntity>,
  ): Promise<SubscriptionPlanEntity> {
    const entity = await this.findOne(conditions);

    return this.subscriptionPlanEntityRepository.remove(entity).catch(() => {
      throw new NotFoundException(
        ErrorMessagesEnum.SUBSCRIPTION_PLAN_NOT_FOUND,
      );
    });
  }
}

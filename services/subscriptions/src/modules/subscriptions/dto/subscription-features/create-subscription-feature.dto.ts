import { FeatureEntity, SubscriptionPlanEntity } from '../../entities';

export class CreateSubscriptionFeatureDto {
  public subscriptionPlan: Partial<SubscriptionPlanEntity>;

  public feature: Partial<FeatureEntity>;

  public value: number;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionFeatureDto } from './create-subscription-feature.dto';

export class UpdateSubscriptionFeatureDto extends PartialType(
  CreateSubscriptionFeatureDto,
) {}

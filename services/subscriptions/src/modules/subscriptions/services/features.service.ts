import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessagesEnum } from 'src/common';
import { ServiceErrorMessagesInterface } from 'src/common/interfaces';
import { BaseService } from 'src/common/services';
import { Repository } from 'typeorm';
import { FeatureEntity } from '../entities';

const serviceErrorMessages: ServiceErrorMessagesInterface = {
  entitiesNotFound: ErrorMessagesEnum.FEATURES_NOT_FOUND,
  entityNotFound: ErrorMessagesEnum.FEATURE_NOT_FOUND,
  inputDataError: ErrorMessagesEnum.INPUT_DATA_ERROR,
};

@Injectable()
export class FeaturesService extends BaseService<FeatureEntity> {
  constructor(
    @InjectRepository(FeatureEntity)
    featureEntityRepository: Repository<FeatureEntity>,
  ) {
    super(featureEntityRepository, serviceErrorMessages);
  }
}

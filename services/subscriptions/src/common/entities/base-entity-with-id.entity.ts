import { BaseEntity } from 'typeorm';

export abstract class BaseEntityWithId extends BaseEntity {
  id: string;
}

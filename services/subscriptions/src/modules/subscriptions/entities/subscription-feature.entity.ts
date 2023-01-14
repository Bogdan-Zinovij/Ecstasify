import { Type } from 'class-transformer';
import { BaseEntityWithId } from 'src/common/entities';
import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ID } from '../../../common';
import { FeatureEntity } from './feature.entity';
import { SubscriptionPlanEntity } from './subscription-plan.entity';

@Entity('subscription-features')
export class SubscriptionFeatureEntity extends BaseEntityWithId {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Type(() => ID)
  @JoinColumn()
  @ManyToOne(() => SubscriptionPlanEntity, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  public subscriptionPlan: Partial<SubscriptionPlanEntity>;

  @Type(() => ID)
  @JoinColumn()
  @ManyToOne(() => FeatureEntity, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  public feature: Partial<FeatureEntity>;

  @Column({ type: 'numeric', scale: 2, precision: 9, nullable: false })
  public readonly value: number;

  @CreateDateColumn({
    readonly: true,
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  public readonly createdAt: Date;

  @UpdateDateColumn({
    readonly: true,
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  public readonly updatedAt: Date;
}

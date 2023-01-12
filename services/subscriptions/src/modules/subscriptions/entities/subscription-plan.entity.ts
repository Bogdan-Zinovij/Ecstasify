import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SubscriptionFeatureEntity } from './subscription-feature.entity';

@Entity('subscription-plans')
export class SubscriptionPlanEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({ type: 'varchar', length: 32, unique: true })
  public readonly name: string;

  @Column({ type: 'numeric', scale: 2, precision: 9 })
  public readonly price: number;

  @OneToMany(
    () => SubscriptionFeatureEntity,
    ({ subscriptionPlan }) => subscriptionPlan,
    {
      onDelete: 'SET NULL',
      nullable: true,
      eager: false,
    },
  )
  public readonly subscriptionFeatures?: Partial<SubscriptionFeatureEntity>[];

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

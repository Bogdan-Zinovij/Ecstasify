import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
} from 'typeorm';
import { SubscriptionFeatureEntity } from './subscription-feature.entity';

@Entity('features')
export class FeatureEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  public readonly name: string;

  @OneToMany(() => SubscriptionFeatureEntity, ({ feature }) => feature, {
    onDelete: 'SET NULL',
    nullable: true,
    eager: false,
  })
  public readonly subscriptionFeature?: Partial<SubscriptionFeatureEntity>;

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

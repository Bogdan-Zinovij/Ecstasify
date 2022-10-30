import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('subscription-plans')
export class SubscriptionPlanEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column()
  public readonly name: string;

  @Column({ type: 'numeric', scale: 4, precision: 9 })
  public readonly price: number;

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

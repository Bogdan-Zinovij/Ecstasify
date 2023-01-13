import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Column,
  Entity,
} from 'typeorm';

@Entity('files')
export class FileEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  public readonly fileName: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  public readonly fileExt: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public readonly fileNameWithExt: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  public readonly filePath: string;

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

import { IsUUID } from 'class-validator';

export class ID {
  @IsUUID()
  public readonly id: string;
}

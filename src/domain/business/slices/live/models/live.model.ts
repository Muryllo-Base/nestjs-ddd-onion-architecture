import { Column, Entity } from 'typeorm';
import { DomainModel } from 'src/domain/models';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

@Entity({ name: 'lives' })
export class Live extends DomainModel {

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(256)
  @Column()
  public title: string;
  
}

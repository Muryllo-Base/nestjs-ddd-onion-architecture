import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { 
  IsDate, 
  IsDefined, 
  IsNotEmpty, 
  IsOptional, 
  IsString 
} from 'class-validator';

export class LiveResponseDto {

  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  public id: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty()
  @Expose()
  @IsDate()
  @IsDefined()
  public createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  public updatedAt?: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  public deletedAt?: Date;

}

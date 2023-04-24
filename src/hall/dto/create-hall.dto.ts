import {
  IsString,
  IsNotEmpty,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Specs {
  @IsNotEmpty()
  rows: number;

  @IsNotEmpty()
  cols: number;
}

export class CreateHallDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Specs)
  specs: Specs;
}

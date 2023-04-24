import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSeatDto {
  @IsNotEmpty()
  hallId: string;

  @IsString()
  @IsNotEmpty()
  no: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

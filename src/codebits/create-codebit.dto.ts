import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCodebitDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

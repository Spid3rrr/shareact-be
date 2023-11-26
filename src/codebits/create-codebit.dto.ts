import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCodebitDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly html: string;

  @IsString()
  @IsOptional()
  readonly css: string;

  @IsString()
  @IsOptional()
  readonly javascript: string;
}

import { IsOptional, IsString } from 'class-validator';

export class UpdateCodebitDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  @IsOptional()
  readonly html: string;

  @IsString()
  @IsOptional()
  readonly css: string;

  @IsString()
  @IsOptional()
  readonly javascript: string;
}

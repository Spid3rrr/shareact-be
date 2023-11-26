import { IsOptional, IsString } from 'class-validator';

export class UpdateCodebitDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description: string;
}

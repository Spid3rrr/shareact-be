import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Codebit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  html: string;

  @Column()
  css: string;

  @Column()
  javascript: string;
}

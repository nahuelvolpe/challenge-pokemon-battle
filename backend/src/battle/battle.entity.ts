import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winnerId: number;

  @Column()
  loserId: number;

  @Column()
  createdAt: Date;
}
import { Column, Entity, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column()
  text: string;

  @Column()
  category: string;
}

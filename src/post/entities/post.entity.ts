import { type } from 'os';
import { UserEntity } from 'src/user/intities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('post')
export class PostEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  location: string;

  @ManyToMany(type => CategoryEntity, category => category.posts)
  
  @JoinTable()
  categories: CategoryEntity[];

  @ManyToOne(type=> UserEntity ,user=>user.posts )
  user:UserEntity;

  @Column({
    default :0,
  })
  price:number
}

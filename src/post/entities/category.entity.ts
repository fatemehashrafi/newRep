
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostEntity } from "./post.entity";

@Entity('category')

export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;

    @ManyToMany(type => PostEntity , Posts => Posts.categories)
    @JoinTable()
    posts:PostEntity[];
}

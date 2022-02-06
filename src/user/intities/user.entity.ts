import { Post } from "@nestjs/common";
import { Exclude } from "class-transformer";
import { type } from "os";
import { EventEntity } from "src/event/entities/event.entities";
import { PostEntity } from "src/post/entities/post.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')

export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    username:string;

    @Column()
    @Exclude()
    password:string;

    @OneToMany(type=> PostEntity , Post=>Post.user)
    @JoinColumn()
    posts:PostEntity[];

    @OneToMany(type=>EventEntity ,event=>event.user)
    events:EventEntity[];
}

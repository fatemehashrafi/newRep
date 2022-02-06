import { UserEntity } from 'src/user/intities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum EventTypes {
  Liked = 'LIKED',
  Commented = 'COMMENTED',
}

@Entity('event')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  message: EventTypes;

  @Column()
  refType: string;

  @Column()
  refId: number;

  @ManyToOne(()=>UserEntity, user=>user.events)
  @JoinColumn()
  user: UserEntity;
}

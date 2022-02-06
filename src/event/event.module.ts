import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from 'src/event/entities/event.entities';
import { EventService } from './event.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyModule } from 'src/currency/currency.module';
import { EventEntity } from 'src/event/entities/event.entities';
import { LoggerModule } from 'src/logger/logger.module';
import { UtilityModule } from 'src/utility/utility.module';
import { CategoryEntity } from './entities/category.entity';
import { PostEntity } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { EventModule } from 'src/event/event.module';
import { ConfigModule } from '@nestjs/config';
import postConfig from './config/post.config';
import { AppKeyModule } from 'src/app-key/app-key.module';

@Module({
  imports: [
    ConfigModule.forFeature(postConfig),
    TypeOrmModule.forFeature([PostEntity, CategoryEntity, EventEntity]),
    CurrencyModule.forRoot(true),
    EventModule,
    UtilityModule,
    LoggerModule,
    AppKeyModule,
  ],
  controllers: [PostController],
  providers: [
    PostService,
    {
      provide: 'MAIL_API',
      useValue: 'http://mail.google.com',
    },
  ],
})
export class PostModule {}

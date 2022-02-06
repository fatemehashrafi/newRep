import { MiddlewareConsumer, Module, NestModule, RequestMethod, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { UtilityModule } from 'src/utility/utility.module';
import { CurrencyModule } from 'src/currency/currency.module';
import { LoggerModule } from 'src/logger/logger.module';
import { TranslateModule } from 'src/translate/translate.module';
import { TextfieldsModule } from 'src/textfields/textfields.module';
import appConfig from './config/app.config';
import * as Joi from 'joi';
import { EventModule } from 'src/event/event.module';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LogExceptionFilter } from 'src/common/filters/log-exception.filter';
import { AppKeyGuard } from 'src/common/guards/app-key.guard';
import { AppKeyModule } from 'src/app-key/app-key.module';
import { PostModule } from 'src/post/post.module';
import { TimeoutInterceptor } from 'src/common/interceptor/timeout.interceptor';
import { NotifyModule } from 'src/notify/notify.module';
import { ReqResDurationMiddleware } from 'src/common/middleware/req-res-duration.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      validationSchema: Joi.object({
        HOST: Joi.string().required(),
        PORT: Joi.number().required(),
        USER_NAME: Joi.string().default('postgres'),
        VALIDATION_WHITE_LIST :Joi.boolean(),
        FORBID_NON_WHITE_LISTED:Joi.boolean(),
        TIMEOUT:Joi.number(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(appConfig)],
      useFactory: (app: ConfigType<typeof appConfig>) => {
        return {
          type: 'postgres',
          ...app.database,
          extra: {
            trustServerCertificate: true,
          },
          synchronize: true,
          autoLoadEntities: true,
        };
      },
      inject: [appConfig.KEY],
    }),
    UserModule,
    EventModule,
    UtilityModule,
    CurrencyModule,
    LoggerModule,
    TranslateModule,
    TextfieldsModule,
    PostModule,
    AppKeyModule,
    NotifyModule,
  ],
  controllers: [AppController],
  providers: [AppService ,
  {
    provide: APP_PIPE,
    useClass:LogExceptionFilter,
  },
  {
  provide:APP_GUARD,
  useClass:AppKeyGuard,
  },
  {
    provide:APP_INTERCEPTOR,
    useClass:TimeoutInterceptor,
  },
  //   inject:[ConfigService],
  //   useFactory :(configService:ConfigService)=> {
  //     return new ValidationPipe({
  //        whitelist: configService.get<boolean>('VALIDATION_WHITE_LIST'),
  //        forbidNonWhitelisted: configService.get<boolean>('FORBID_NON_WHITE_LISTED'),
  //        transform: true,
  //        transformOptions:{
  //          enableImplicitConversion:true,
  //        },
  //     })
  //   },
  // },
],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ReqResDurationMiddleware ,ReqResDurationMiddleware)
    .forRoutes({
      method:RequestMethod.GET,
      path:"*",
    });
  }
}

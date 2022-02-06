import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CurrencyModule } from 'src/currency/currency.module';
import { LoggerModule } from 'src/logger/logger.module';
import { UtilityModule } from 'src/utility/utility.module';
import { UserEntity } from './intities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]),
  CurrencyModule.forRoot(false),
  LoggerModule,
  UtilityModule,
  AuthModule,
],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],
})
export class UserModule {}

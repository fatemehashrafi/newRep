import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/intities/user.entity';
import { UserModule } from 'src/user/user.module';
import { UtilityModule } from 'src/utility/utility.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { UserSercurityService } from './user.sercurity.service';

@Module({
  imports:[ 
    UtilityModule ,
    PassportModule,
   TypeOrmModule.forFeature([UserEntity])
  ],

  providers: [AuthService ,LocalStrategy ,UserSercurityService],
  exports:[AuthService]
})
export class AuthModule {}

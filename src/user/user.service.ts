import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/logger/logger.service';
import { UtilityService } from 'src/utility/utility.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create.user.dto';
import { UserEntity } from './intities/user.entity';

@Injectable()
export class UserService {
    findByUsername(username: string) {
        throw new Error('Method not implemented.');
    }
    constructor(private readonly loggerService:LoggerService,
         @InjectRepository(UserEntity)
         private readonly userRepository: Repository<UserEntity>,
         private readonly utilityService :UtilityService ){
        this.loggerService.setPrefix('userService');
        this.loggerService.log('constructor called');
    }

    findAll(){
        return this.userRepository.find();
    }

    create(date:CreateUserDto){
        date.password =this.utilityService.hash(date.password)
        const user = this.userRepository.create(date);
        return this.userRepository.save(user);

    }

    
}

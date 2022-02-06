import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/intities/user.entity";
import { Repository } from "typeorm";

@Injectable()

export class UserSercurityService{

    constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>){}
    
    findByUsername(username:string){
        return this.userRepository.findOne({username});
    }
}
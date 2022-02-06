import { Injectable } from '@nestjs/common';
import { UtilityService } from 'src/utility/utility.service';
import { UserSercurityService } from './user.sercurity.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userSercurityService:UserSercurityService,
        private readonly utilityService:UtilityService,
        ){}
    async validate(username:string , password:string){
        const user= await this.userSercurityService.findByUsername(username);

        if( await this.utilityService.compare(password ,user.password)){
            return user;
        }
        return null;

    }
}

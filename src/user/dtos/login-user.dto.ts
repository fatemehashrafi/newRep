import { PickType } from "@nestjs/swagger";
import { UserEntity } from "../intities/user.entity";

export class LoginUserDto extends PickType(UserEntity ,['username','password']as const){
    
}
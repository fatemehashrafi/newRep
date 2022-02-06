import { OmitType, PickType } from "@nestjs/swagger";
import { UserEntity } from "../intities/user.entity";

// export class CreateUserDto extends OmitType(UserEntity, ['events','id','posts'] as const){}
export class CreateUserDto extends PickType(UserEntity, ['username','password','name'] as const){}
import { Injectable } from '@nestjs/common';
import { hashSync, compare } from 'bcrypt';


@Injectable()
export class UtilityService {
  hash(input:string){
    return hashSync(input, 15);
  }

  compare(password:string , hashpassword:string){
    return compare (password ,hashpassword)
  }
   
}

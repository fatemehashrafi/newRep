import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
    getCurrencySign(Currency:string ,full:boolean){
        let sing ="";
        switch (Currency) {
            case 'euro':
                sing = '€';
                break;
             case 'dollar':
                sing = '$';
                break;
            case 'riall':
                sing = "﷼";
                break;
            default:
                sing ="x" ;
                break;
          }
          return full ? `${sing} ${Currency}` :sing;
    }
}

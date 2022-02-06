import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseMoneyPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    let currencySigns:string[]=["$" ,"^","ریال"];
    let isSignAccepted =false;

    for(var i=0; i<=currencySigns.length;i++){
      isSignAccepted =value.endsWith(currencySigns[i]);
      console.log('isSignAccepted',isSignAccepted);
      if(isSignAccepted) break;

    }

    console.log('isSignAccepted',isSignAccepted);

    if(!isSignAccepted){
      throw new BadRequestException(`your currency does not end whit acceptable sign`);

    }

    currencySigns.map((item) =>{
      value.replace(item , '');
    });

    value = value.replace(',','');

    return parseInt(value);
  }
}

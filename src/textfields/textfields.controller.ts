import { Controller, Get, Headers, Param, Req } from '@nestjs/common';
import { TranslateFieldsEnum, TranslateService } from 'src/translate/translate.service';
import { TextfieldsService } from './textfields.service';

@Controller('textfields')
export class TextfieldsController {
  constructor(
    private readonly textfieldsService: TextfieldsService ,
    private readonly translateService:TranslateService,
    ) {}
    

    @Get('/:field')
    getField(@Param('field') field:TranslateFieldsEnum )
     {
      return this.translateService.translate(field);
    }


}




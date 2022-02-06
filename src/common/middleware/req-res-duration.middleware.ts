import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ReqResDurationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('middleware colled');
    let startDate = new Date();
    res.on('finish', () => {
      let endDate = new Date();
      let duration = +endDate - +startDate;

      console.log('Request response duration: ', duration);
    });

    
    next();
  }
}

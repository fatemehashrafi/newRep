import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class WrapperResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`start intercep`)
    return next.handle().pipe(
      map((date) =>{
        // console.log('after return interceptor')
        // console.log(res);
        // return {date :{...res}};
        return {date : instanceToPlain(date) };

      }),
    );
  }
}

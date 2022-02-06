import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { catchError, delay, from, map, Observable, Subscriber, tap, throwError, timeout } from 'rxjs';
import { AppModule } from './app/app.module';
import { WrapperResponseInterceptor } from './common/interceptor/wrapper-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new WrapperResponseInterceptor());

  const options = new DocumentBuilder().setTitle('our api specification')
  .setVersion('1.0.0')
  .setDescription('our api description')
  .build();

  const document = SwaggerModule.createDocument(app ,options);

  SwaggerModule.setup('/docs' ,app ,document);

  await app.listen(3000, () => {
    console.log('Start listening on http://localhost:3000');
  });
}
async function testRXJS(){
  // const observable =new Observable(Subscriber =>{
  //   Subscriber.next(1);
  //   Subscriber.next(2);
  //   let i=3;
  //   while(i<=10){
  //     Subscriber.next(i);
  //     i++;
  //   }
  //   Subscriber.complete();
  //});

    const observable =
     from ([1,2,3,4])
     .pipe(
      map((item) => item + 1),
      tap((item)=>{
        console.log(item);
      }),
      delay(2000),
      map((item)=> item +1),
      // timeout(1000),
      // catchError((err)=>{
      //   console.log(`inside pipe` ,err);
      //   return throwError(() => new Error (err));
      // }),
    )

     .subscribe({
     next:(value) =>{
      console.log(`next called ${value}`);
    },
    complete:()=>{
      console.log('complete');
    },
    error:(err)=>{
      console.log(`error ${err}`);
    }
  })
}
//testRXJS();

 bootstrap();

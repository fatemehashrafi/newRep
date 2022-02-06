import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Response } from "express";

export const Domain = createParamDecorator(
    (input :string , ctx:ExecutionContext )=>{
        const req = ctx.switchToHttp().getRequest<Response>();
        const domain = req.header['host'] ;
        console.log(req);
        return domain ? domain :input;
    }
)
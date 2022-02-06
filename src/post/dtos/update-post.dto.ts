// import { IsOptional, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreatePostDto } from "./create-post.dto";

export class UpdatePostDto extends PartialType(CreatePostDto) {}


    // @IsString()
    // @IsOptional()
    // title? :string;
    // @IsString()  
    // @IsOptional()
    // content?:string;
    // @IsString()
    // @IsOptional()
    // location?:string;
    // @IsString({each:true})
    // @IsOptional()
    // categories?:string[];


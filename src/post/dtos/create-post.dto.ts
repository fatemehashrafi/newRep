import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreatePostDto {
    @ApiProperty({
        description:'title of the post ',
        example:'new post',
    })
    @IsString()
    title :string;

    @IsString()  
    content:string;

    @IsString()
    location:string;

    @IsString({each:true})
    categories:string[];
}

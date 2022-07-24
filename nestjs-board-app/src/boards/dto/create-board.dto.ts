import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateBoardDto{
    @IsNotEmpty() //해당 데이터가 Empty이면 안됨!
    title: string;

    @IsNotEmpty()
    description: string;
    
}
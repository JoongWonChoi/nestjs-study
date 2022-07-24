import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards') //boards 모듈의 시작 경로. :: localhost:3000/boards으로 시작
export class BoardsController {
    constructor(private boardsService : BoardsService){}

    
    //handler
    //타입 지정 : 선택사항. 하지만 다른 타입을 사용하였을 때 에러를 발생시키고,
    //타입을 정의해 줌으로써 가독성을 높여줌
    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    //게시물 작성은 클라이언트로부터 게시물 정보를 받아야함
    @Post()
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Board{

                    return this.boardsService.createBoard(CreateBoardDto);

    }
    

}

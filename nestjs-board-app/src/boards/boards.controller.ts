import { Body, Controller, Get, Post, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards') //boards 모듈의 시작 경로. :: localhost:3000/boards으로 시작
export class BoardsController {
    constructor(private boardsService : BoardsService){}

    
    // //handler
    // //타입 지정 : 선택사항. 하지만 다른 타입을 사용하였을 때 에러를 발생시키고,
    // //타입을 정의해 줌으로써 가독성을 높여줌
    // @Get()
    // getAllBoard(): Board[] {
    //     return this.boardsService.getAllBoards();
    // }

    // //CREATE
    // //게시물 작성은 클라이언트로부터 게시물 정보를 받아야함
    // @Post()
    // @UsePipes(ValidationPipe) //인자들 검사를 위한 파이프 설치
    // createBoard(@Body() CreateBoardDto: CreateBoardDto): Board{
    //     return this.boardsService.createBoard(CreateBoardDto);

    // }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board>{
        return this.boardsService.createBoard(CreateBoardDto);
    }
    
    // //READ
    // @Get('/:id')
    // getBoardById(@Param('id') id: string): Board{
    //     return this.boardsService.getBoardById(id);
    // }

    @Get('/:id')
    getBoardById(@Param('id')id: number): Promise<Board>{
        return this.boardsService.getBoardById(id);

    }

    @Get('/:id/title')
    getBoardTitleById(@Param('id')id: number){
        return this.boardsService.getBoardTitleById(id);

    }

    // //DELETE
    // @Delete('/:id')
    // deleteBoard(@Param('id')id: string): void{
    //     this.boardsService.deleteBoard(id);
    // }

    // //UPDATE
    // @Patch('/:id/status')
    // updateBoardStatus(@Param('id')id: string,
    //                   @Body('status', BoardStatusValidationPipe)status: BoardStatus ): Board{
    //     return this.boardsService.updateBoardStatus(id, status);

    // }

    // Pipe : 메소드가 호출되기 직전에 메소드로 향하는 인수에 대하여 작동
    // 역할 : Validation Pipe & Data Transformation
    // 파이프 사용법(Binding pipes)
    // Handler-level pipes : 핸들러 레벨에서 사용되는 인자에 대하여 사용
    // Parameter-level pipe : 핸들러 내의 인자 하나에 대한 파이프
    // Global-pipe : 어플리케이션 전체에 적용되는 파이프
    // npm install class-validator class-transformer --save
    // 원하는 데이터에 조건 파이프를 걸어주고(DTO), 
    // 유효성 검사를 원하는 곳에 파이프를 설치

    //typeorm을 사용하기 위해 필요한 모듈들
    // @nestjs/typeorm, typeorm, DB모듈(mysql, pg ...)

}

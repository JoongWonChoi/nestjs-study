import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { stat } from 'fs';
import { Any } from 'typeorm';

@Injectable() //다른 컴포넌트에서 이 서비스를 사용할 수 있게 해줌. 의존성 주입
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository
            ){}//생성자 의존성 주입

    //[ async - await ] :: DB에 접근 후 DB 작업이 끝난 후 결과값을 받을 수 있게 해주기
    //why? ==> DB 요청에 대한 처리가 마무리되지 않고 값이 반환될 수 있음


    //게시물 작성
    async createBoard(CreateBoardDto: CreateBoardDto): Promise<Board>{
        const { title, description } = CreateBoardDto;

        const board = this.boardRepository.create({
            title : title,
            description : description,
            status : BoardStatus.PUBLIC
        })
        this.boardRepository.save(board);
        return board;
    }

    //게시물 조회
    async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne({where :{id : id}});
        if(!found){
            throw new NotFoundException(`cant find board with id ${id}`)
        }
        return found;
    }







    // private boards: Board[] = [];
    // //모든 게시물 조회
    // getAllBoards(): Board[]{
    //     return this.boards;
    // }
    // //게시물 생성
    // createBoard(CreateBoardDto: CreateBoardDto){
    //     const { title, description } = CreateBoardDto;
    //     const board: Board = {
    //         id : uuid(),
    //         title : title,
    //         description : description,
    //         status : BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board); //생성한 Board 타입의 board 객체를 Board 배열에 넣어주기
    //     return board;
    // }
    // //id로 게시물 조회
    // getBoardById(id: string): Board{
    //     const found = this.boards.find((board)=> board.id === id);
    //     if(!found){
    //         throw new NotFoundException(`Cant find board id with ${id}`);
    //     }
    //     return found;
    // }  
    // //id로 게시물 삭제
    // deleteBoard(id: string): void{
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board)=>board.id !== found.id);
    // }
    // //id로 게시물 상태 변경(status)
    // updateBoardStatus(id: string, status: BoardStatus): Board{
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;

    // }


}

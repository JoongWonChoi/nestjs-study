import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable() //다른 컴포넌트에서 이 서비스를 사용할 수 있게 해줌. 의존성 주입
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[]{
        return this.boards;
    }

    createBoard(CreateBoardDto: CreateBoardDto){
        const { title, description } = CreateBoardDto;
        const board: Board = {
            id : uuid(),
            title : title,
            description : description,
            status : BoardStatus.PUBLIC
        }
        this.boards.push(board); //생성한 Board 타입의 board 객체를 Board 배열에 넣어주기
        return board;

    }
}

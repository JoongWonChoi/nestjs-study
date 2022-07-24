import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([BoardRepository]) //Board 모듈이 BoardRepository를 통해 TypeOrm을 사용하기 위함
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}

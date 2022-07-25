import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { boardProviders } from './board.providers';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports : [
    //TypeOrmModule.forFeature([BoardRepository]), //Board 모듈이 BoardRepository를 통해 TypeOrm을 사용하기 위함
    DatabaseModule
  ],
  controllers: [BoardsController],
  providers: [BoardsService,
  ...boardProviders,]
})
export class BoardsModule {}

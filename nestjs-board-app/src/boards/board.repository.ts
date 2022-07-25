// import { EntityRepository, Repository } from "typeorm";
// import { Board } from "./board.entity";

// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board>{

//     //typeorm 공식 api에서 orm 접근 코드 확인 가능





// }


// import { DataSource } from 'typeorm';
// import { Board } from './board.entity';

// export const boardProviders = [
//   {
//     provide: 'BOARD_REPOSITORY',
//     useFactory: (dataSource: DataSource) => dataSource.getRepository(Board),
//     inject: ['DATA_SOURCE'],
//   },
// ];
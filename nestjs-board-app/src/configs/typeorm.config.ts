import { TypeOrmModuleOptions } from "@nestjs/typeorm";

//typeorm 설정 파일
export const typeORMConfig : TypeOrmModuleOptions = {
    type : 'mysql',
    host: 'localhost',
    port : 3306,
    username : 'root',
    password : '1234',
    database : 'board-app',
    entities : [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize : true
}

//해당 설정 모듈을 app에 추가해줘야함. app.module.ts
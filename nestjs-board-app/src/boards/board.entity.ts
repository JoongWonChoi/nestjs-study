import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";


//하나의 엔티티는 ORM에 의해 하나의 테이블에 매칭됨
@Entity() //해당 클래스가 Entit임을 알려주는 어노테이션
export class Board extends BaseEntity{
    @PrimaryGeneratedColumn() //자동 증가
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;
}
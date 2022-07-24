import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

// 커스텀 pipe 만들기
// PipeTransform interface를 상속받아서 진행

export class BoardStatusValidationPipe implements PipeTransform {

    //Stauts 값의 유효성을 판단하기 위한 기준
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any, metadata: ArgumentMetadata) {
        //console.log('value', value); //처리가 된 인자의 값
        //console.log('metadata', metadata); //인자에 대한 metadata를 포함한 객체
        //return된 값은 router로 전달
        value = value.toUpperCase();
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`Not validate STATUS :: ${value}, STATUS bust me PRIVATE OR PUBLIC`)
        }
    }

    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status);
        //status라는 값이 StatusOptions에 존재 :: index !== -1 => true
        //status라는 값이 StatusOptions에 존재 X :: index !== -1 => false
        return index !== -1;
    }
}
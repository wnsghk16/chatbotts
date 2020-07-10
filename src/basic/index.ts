import hello,{goodbye,birthday,add} from "./hello";
import jsTypes,{tsTypes,symbolType,tupleType} from "./jsTypes"
import operator, {spread} from "./operator";
import loop from "./loop";

let menu : number = 10
let name, profile, message = ""

switch (menu) {
    case 0:
        name = "홍길동"
        message = hello(name)
        console.log(message)
        break
    case 1:
        name = "유관순"
        message = goodbye(name)
        console.log(message)
        break
    case 2:
        name = "김유신"
        let year:number = 2002
        profile = JSON.stringify(birthday(name,year))
        console.log(profile)
        break
    case 3:
        let num1:number = 13
        let num2:number = 30
        let addResult:number = 0
        addResult = add(num1,num2)
        console.log("덧셈결과: "+addResult)
        break
    case 4: //자바 스크립트 타입 출력
        jsTypes();
        break
    case 5:
        tsTypes();
        break
    case 6:
        symbolType();
        break
    case 7:
        tupleType();
        break
    case 8:
        operator();
        break
    case 9:
        spread();
        break
    case 10:
        loop();
        break
    default:
        console.log("존재하지 않는 케이스입니다.")
        break
}
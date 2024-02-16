//any
//특정 변수의 타입을 확실히 모를 때 사용
//런타임 에러를 일으킬 가능성이 높기 때문에 사용 자제

let anyVar: any = 10;
anyVar = "Hello";

let num: number = 10;
num = anyVar;

//unknown
//조건문을 활용해 사용 가능
let unknownVar: unknown;

unknownVar = "Hello";
unknownVar = 10;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}

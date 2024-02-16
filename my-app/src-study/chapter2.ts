let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "world", "!"];

let boolArr: Array<boolean> = [true, false];

//배열 요소 타입이 다양할 경우
let multiArr: (number | string | boolean)[] = [1, "hello", true];

//다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플(길이와 타입이 고정된 배열)
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "A", true];

tup1.push(10); // 튜플이더라도 배열 메소드를 사용하면 그냥 적용됨
console.log(tup1);
tup1.pop();
tup1.pop();
console.log(tup1);

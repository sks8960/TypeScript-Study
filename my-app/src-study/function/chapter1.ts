//함수 타입 표현식

type Operation = (...rest: number[]) => number;

const add: Operation = (a, b, c, d, e) => a + b + c + d + e;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
const sub: Operation = (a, b) => a - b;

console.log(add(1, 2, 3, 4, 5));

// 호출 시그니처

type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation = (a, b, c, d, e) => a + b + c + d + e;
const multiply2: Operation = (a, b) => a * b;
const divide2: Operation = (a, b) => a / b;
const sub2: Operation = (a, b) => a - b;

// 대수 타입
// -> 여러개의 타입을 형성하여 새롭게 만들어 낸 타입
// -> 합집합 타입과 교집합 타입이 존재

// 1. 합집합 - Union 타입
let a: number | string;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union14: Union1 = {
//   name: "",
// };
// 에러

// 2. 교집합 타입 - Intersection 타입

let variable: number & string; // never타입으로 잡힘

type Intersection = Dog & Person; // 타입 객체의 모든 항목이 있어야 오류 안남

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "John";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "Brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; 에러 발생, number와 string은 겹치는 타입이 아님, 타입 계층도 확인
// let num3 = 10 as unknown as string 으로 하면 에러 안남, 꼭 필요한 경우에만 이렇게 사용

let num4 = 10 as const;
let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // as const를 붙이면 readonly로 전환

// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "신경식",
};

const len: number = post.author!.length;

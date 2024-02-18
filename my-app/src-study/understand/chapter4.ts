// 타입 추론

let a = 10;
let b = "Hello, world";
let c = {
  id: 1,
  name: "Shin",
  profile: {
    nickname: "sks8960",
  },
  urls: ["www.naver.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "Hello", true];

function func(message = "Hello") {
  return "Hello";
}

let d; // 암묵적으로 any로 정해짐
d = 10; //number로 진화
d = "hello"; // string으로 진화

const num = 10; // 리터럴 타입으로 정의, const이기때문에 값이 바뀔일이 없기 때문
const string = "hello"; // 위와 같은 이유로 리터럴

// unknown

function unknownExam() {
  let a: unknown = 1;
}

// 객체 타입 호환성
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellows",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

//dog = animal; //breed 속성이 Animal 형식에 없지만 Dog 형식에서는 필수라 오류
animal = dog;

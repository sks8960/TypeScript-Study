// 타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
};

//value => number : toFixed
//value => string : toUpperCase
//value => Date : getTime
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    //   } else if (typeof value === "object") {
    //     console.log(value.getTime());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if ("age" in value) {
    console.log(value);
  }
}

// instanceof에는 사용자가 만든 type을 사용할 수 없다
// 예를 들어 else if (value instanceof Person) 하면 값을 참조 할 수 없다는 오류 발생

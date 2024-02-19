// 오버로드 시그니처
// 자바, C처럼 매개변수에 따라 재정의 되는 것
function func(a: number): void;
function func(a: number, b: number): void;

function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func();
func(1);
func(1, 2);
// func(1, 2, 3);

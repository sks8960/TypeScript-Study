//함수 타입 정의

function func(a, b) {
  return a + b;
}

let func1 = (a: number, b: number): number => {
  return a + b;
};

//함수의 매개변수

function Introduce(name = "신경식", age: number, tall?: number): void {
  // 필수 매개변수가 무조건 앞으로 오게 설정
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

Introduce("신경식", 26, 178);
Introduce("신경식", 26);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3, 4, 5);

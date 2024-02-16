// void
//아무것도 없는 것. return값이 없을 때 사용

const func1 = () => {
  return "Hello";
};

const func2 = () => {
  console.log("Hello, World");
};

function funcA(): string {
  return "Hello";
}

function funcB(): void {
  console.log("Hello, World");
}

// never
// 불가능한 타입 또는 모순
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// 함수타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; //다운캐스팅이므로 안됨 (number가 number리터럴로 들어갈 수 없기 때문)
// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 에러 발생, 업캐스팅 발생, 매개변수를 기준으로 보면 다운캐스팅은 허용, 업캐스팅은 불가
d = c;

// 2-2. 매개변수의 타입이 같고, 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 에러발생, 매개변수 2개짜리를 1개짜리에 넣으면 에러. 즉, 매개변수가 더 많은 것을 더 적은 것에 넣을 수 없다는 것.

// 총정리
// 매개변수를 기준으로 비교하면 업캐스팅 불가, 다운캐스팅은 가능
//

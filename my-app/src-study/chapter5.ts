//enum타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 숫자 할당 안해도 자동으로 할당됨. 예를 들어 ADMIN, 이렇게 설정해도 ADMIN은 0으로 할당
  USER = 10,
  GUEST, // 11
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "A",
  role: Role.ADMIN, // 0
  language: Language.korean,
};
const user2 = {
  name: "B",
  role: Role.USER, // 1
  language: Language.english,
};
const user3 = {
  name: "C",
  role: Role.GUEST, // 2
  language: Language.korean,
};

console.log(user1, user2, user3);

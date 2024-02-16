//enum타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
  Role[(Role["ADMIN"] = 0)] = "ADMIN";
  Role[(Role["USER"] = 10)] = "USER";
  Role[(Role["GUEST"] = 11)] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
  Language["korean"] = "ko";
  Language["english"] = "en";
})(Language || (Language = {}));
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
export {};

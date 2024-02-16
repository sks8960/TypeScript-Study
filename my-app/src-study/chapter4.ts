// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

const user1: User = {
  id: 1,
  name: "Shin",
  nickname: "sks8960",
  birth: "1999-01-28",
  bio: "O",
  location: "Seoul",
};

//인덱스 시그니처
type countryCodes = {
  [key: string]: string;
};
let CountryCodes: countryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

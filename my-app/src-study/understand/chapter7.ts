// 서로소 유니온 타입 (교집합이 없는 타입들로만 만든 유니온 타입)
// EX) number와 string은 서로소 유니온 타입이라고 불림

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "Member";
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴하였습니다.
// Member -> {name}님 현재까지 {point} 모았습니다./
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`
      );
      break;
    }
    case "Member": {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case "Guest": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
}

// 비동기 태스크 서로소 유니온 타입으로 구현

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log(`에러 발생 ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공 : ${task.response.data}`);
  }
}

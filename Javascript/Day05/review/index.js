// if / switch

// 1. if
// const isOverWeight = true;
// if (isOverWeight) {
//   console.log("과체중입니다.");
// } else {
//   console.log("정상입니다.");
// }

// // 2. switch

// const user = "관리자";

// switch (user) {
//   case "관리자":
//     console.log("관리자 로그인");
//     break;
//   case "편집자":
//     console.log("편집자 로그인");
//     break;
//   case "사원":
//     console.log("사원 로그인");
//     break;
//   default:
//     console.log("회원 로그인");
//     break;
// }

const arr = ["아메리카노", "라떼", "민트", "바닐라"];

arr.forEach((v, i) => {
  // console.log(v, i);
  if (i % 2 != 0 || i === 0) {
    console.log(`${i}.${v}`);
  }
});

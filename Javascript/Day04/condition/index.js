// if 조건문
// if(조건식) {
//    조건식이 참일 때 실행할 코드
// } else {
//    첫번째 조건식을 만족하지 않을 때 실행할 코드
// }

// const age = Number(window.prompt("몇살이셈"));

// if (age > 19) {
//   console.log("쌔끼다컸네");
// } else {
//   console.log("어린노무자슥");
// }
// console.log("프로그램 끝");

// const num1 = window.prompt("수입력 1");
// const num2 = window.prompt("수입력 2");

// if (num1 >= num2) {
//   console.log(Number(`${num1}`));
// } else {
//   console.log(Number(`${num2}`));
// }

// const age = 15;

// if (age > 19) {
//   console.log("성인");
// } else if (19 >= age && age >= 16) {
//   console.log("고딩");
// } else if (age >= 16 && age > 13) {
//   console.log("중딩");
// } else {
//   console.log("잼민이");
// }

// 1. 하나의 정수 입력받고, 양수 or 음수 or 0 인지 확인
// 2. 수학점수 입력받고, 90 점이상 'A' 80점이상 'B' 70점이상 'C' 나머지 'D'

// const tempNum = window.prompt("정수입력");

// if (tempNum > 0) {
//   console.log("입력한 정수는 양수");
// } else if (tempNum < 0) {
//   console.log("입력한 정수는 음수");
// } else {
//   console.log("입력한 정수는 0");
// }

// const mathScore = window.prompt("수학점수 입력");
// if (mathScore >= 90) {
//   console.log("A");
// } else if (mathScore >= 80) {
//   console.log("B");
// } else if (mathScore >= 70) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// num % 2 === 1 홀수
// num % 2 === 0 짝수
const num = Number(window.prompt("수 입력"));

// 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0 판별

// const isPositive = num > 0;
// const isNegative = num < 0;
// const isOdd = num % 2 === 1;
// const isEven = num % 2 === 0;

// if (isPositive && isOdd) {
//   console.log("양의 홀수");
// } else if (isPositive && isEven) {
//   console.log("양의 짝수");
// } else if (isNegative && isOdd) {
//   console.log("음의 홀수");
// } else if (isNegative && isEven) {
//   console.log("음의 짝수");
// } else {
//   console.log("0");
// }

// 지양할 코드
// const age = 10;
// if (age > 5) {
//   if (age > 13) {
//     console.log("청소년");
//   } else {
//     console.log("유소년");
//   }
// }

// switch
const season = "봄";

switch (season) {
  case "봄": {
    console.log("날이 좋아요");
    break;
  }
  case "여름": {
    console.log("날이 더워요");
    break;
  }
  case "가을": {
    console.log("날이 쌀쌀해요");
    break;
  }
  case "겨울": {
    console.log("날이 추워요");
    break;
  }
}

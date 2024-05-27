// 데이터 타입 : 기본 + 참조
// 기본 : String[문자], Number[숫자]

// const a = window.prompt("숫자 입력");
// // 문자 -> 숫자 타입 바꾸기

// // 1. Number
// const b = Number(a);

// // 2. parseInt(), parseFloat() - 문자 타입만 유효
// const c = parseInt(a);

// console.log(b + 10);
// console.log(c + 20);

const num1 = window.prompt("첫 번째 숫자 입력");
const num2 = window.prompt("두 번째 숫자 입력");
const parseIntNum1 = Number(num1);
const parseIntNum2 = Number(num2);
const resultString = `합연산 : ${parseIntNum1 + parseIntNum2}, 차연산 : ${
  num1 - num2
}, 곱연산 : ${num1 * num2} 입니다.`;

const myAge = window.prompt("나이 입력");
const birthYear = 2024 - Number(myAge);
const resultBirthYear = `나이가 ${myAge}라면 출생연도는 ${birthYear}년 입니다.`;

const sqaureLength = window.prompt("변의 길이 입력");
const totalWidth = Number(sqaureLength) * 2;
const resultTotalWidth = `한 변의 길이가 ${sqaureLength}인 정사각형의 넓이는 ${totalWidth}입니다`;

const numResultBox = document.createElement("div");
numResultBox.style.width = "120px";
numResultBox.style.height = "120px";
numResultBox.style.border = "1px solid black";
numResultBox.innerText = resultString;
document.body.appendChild(numResultBox);

const birthCalBox = document.createElement("div");
birthCalBox.style.width = "120px";
birthCalBox.style.height = "120px";
birthCalBox.style.border = "1px solid black";
birthCalBox.innerText = resultBirthYear;
document.body.appendChild(birthCalBox);

const sqaureWidthBox = document.createElement("div");
sqaureWidthBox.style.width = "120px";
sqaureWidthBox.style.height = "120px";
sqaureWidthBox.style.border = "1px solid black";
sqaureWidthBox.innerText = resultTotalWidth;
document.body.appendChild(sqaureWidthBox);

document.body.style.display = "flex";

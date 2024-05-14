// 데이터 타입 : 기본 + 참조
// 기본타입
// 1. 문자
// const favorite1 = window.prompt("당신이 좋아하는 커피는");
// const favorite2 = window.prompt("당신이 좋아하는 빵은");
// console.log(
//   `당신이 좋아하는 커피는 ${favorite1} 이고 당신이 좋아하는 빵은 ${favorite2} 이군요`
// );

// const a = "coffee";
// const b = "bread";
// const c = "latte"; // backtick 백틱

// 1. 자기 소개 프로그램
// 당신의 이름 나이 좋아하는 색을 입력 받고 이를 종합해 자기소개하는 프로그램 작성

// 2. 간단한 일정 안내 프로그램
// 오늘의 날짜와 계획하고 있는 일정을 입력받아 오늘은 날짜 , 계획한 일정은 일정 입니다
// 라고 알려주는 프로그램 작성
// 예시 : 오늘은 2023년 12월 7일, 계획한 일정은 자바스크립트 공부 입니다.

// const userName = window.prompt("이름을 입력하세요");
// const age = window.prompt("나이를 입력하세요");
// const favoriteColor = window.prompt("좋아하는 색을 입력하세요");

// console.log(
//   `제 이름은 ${userName} 이고 나이는 ${age}살이고, 좋아하는 색은 ${favoriteColor} 입니다.`
// );

// const todayDate = window.prompt("오늘 날짜를 년-월-일 순으로 입력해주세요.");
// const toDo = window.prompt("해야할 일정을 입력하세요");

// console.log(`오늘은 ${todayDate}, 계획한 일정은 ${toDo} 입니다.`);

// const buttonName = window.prompt("만들 버튼의 이름을 입력하세요.");
// const namedButton = document.createElement("button");
// namedButton.innerText = buttonName;
// document.body.appendChild(namedButton);

// 유저에게 세번 prompt 로 헥사코드 색깔을 입력받고
// 버튼 3개를 만든 뒤, text : 헥사코드 , backgroundColor : 헥사코드
// 박스 하나 만들고 (width 100 height 100
// 박스backgroundcolor 선택된 버튼의 헥사코드, 텍스트 : 입력된헥사코드[])

const hexaFirst = window.prompt("첫번째 헥사코드 입력");
const hexaSecond = window.prompt("두번째 헥사코드 입력");
const hexaThird = window.prompt("세번째 헥사코드 입력");

const btn1 = document.createElement("button");
btn1.style.backgroundColor = hexaFirst;
btn1.innerText = hexaFirst;

const btn2 = document.createElement("button");
btn2.style.backgroundColor = hexaSecond;
btn2.innerText = hexaSecond;

const btn3 = document.createElement("button");
btn3.style.backgroundColor = hexaThird;
btn3.innerText = hexaThird;

const colorBox = document.createElement("div");
colorBox.style.width = "100px";
colorBox.style.height = "100px";
colorBox.style.border = "2px solid black";
colorBox.style.fontSize = "18px";
colorBox.style.display = "flex";
colorBox.style.justifyContent = "center";
colorBox.style.alignItems = "center";
colorBox.style.transition = "all 1s";
colorBox.innerText = "선택된 색없음 ㅅㄱ";

document.body.appendChild(colorBox);
document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

btn1.addEventListener("click", () => {
  colorBox.innerText = `[${hexaFirst}]`;
  colorBox.style.backgroundColor = hexaFirst;
});

btn2.addEventListener("click", () => {
  colorBox.innerText = `[${hexaSecond}]`;
  colorBox.style.backgroundColor = hexaSecond;
});

btn3.addEventListener("click", () => {
  colorBox.innerText = `[${hexaThird}]`;
  colorBox.style.backgroundColor = hexaThird;
});

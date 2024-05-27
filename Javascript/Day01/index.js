// console.log("자바스크립트! 시작!");
// // 미니퀴즈
// // 자바스크립트 공부 다짐
// // 오늘 점심 메뉴 :
// console.log("완벽하게 복습해서 내걸로 만들어야겠다.");
// console.log("오늘 점심 메뉴는 라멘으로 가자");

// // window.alert("브라우저 경고창 팝업 명령어 실행");

// // window.confirm("이거 컨펌 좀 해줘 네,아니오로 대답해");

// // window.prompt("입력값 프롬프트에 적어줘 ");

// window.open("https://www.naver.com/");
// // 팝업 차단되면 안나와 ~

// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("메가 커피 짱짱");
// });
// document.body.appendChild(a);

// 화면에 버튼 태그 만들고 안의 내용은 석가탄신일
// 클릭 시 alert로 부처님 오심 ㄹㅇ

// const a = document.createElement("button");
// a.innerText = "석가탄신일";
// a.addEventListener("click", () => {
//   window.alert("부처님 오심 ㄹㅇ");
// });
// document.body.appendChild(a);

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 아메리카노를 라떼로

// const a = document.createElement("button");
// a.innerText = "아메리카노";
// a.addEventListener("click", () => {
//   if (a.innerText == "아메리카노") {
//     a.innerText = "바닐라라떼";
//   } else {
//     a.innerText = "아메리카노";
//   }
// });
// document.body.appendChild(a);

// const b = window.prompt("무엇이든 물어보살");
// console.log(b);

// 첫번째 프롬프트는 버튼 클릭 전 이름
// 두번째 프롬프트 버튼 클릭 후 이름
// 클릭 전 이름 버튼 만들고, 클릭하면 두번째 클릭 이름으로 바뀜

// const b = window.prompt("메뉴 입력");
// const c = window.prompt("메뉴 입력");

// const d = document.createElement("button");
// d.innerText = b;
// d.addEventListener("click", () => {
//   d.innerText = c;
// });
// document.body.appendChild(d);

// button 태그 만들고, 배경색 하늘색, 폰트사이즈 20px
// 클릭 이벤트 -> 빨간색으로 바뀌게 만들어보기

// const buttonTest = document.createElement("button");
// buttonTest.innerText = "버튼";
// buttonTest.style.backgroundColor = "skyblue";
// document.body.appendChild(buttonTest);

// buttonTest.addEventListener("click", () => {
//   if (buttonTest.style.backgroundColor == "skyblue") {
//     buttonTest.style.backgroundColor = "red";
//     buttonTest.style.fontSize = "20px";
//   } else {
//     buttonTest.style.backgroundColor = "skyblue";
//     buttonTest.style.fontSize = "1rem";
//   }
// });

// const ace = document.createElement("div");
// ace.innerHTML = "<button>코리아 아이티</button>";
// document.body.appendChild(ace);

// 버튼이 5개 => 빨, 주, 노, 초, 파
// 모두 css 를 배경색은 각각 해당색으로, text 빨,주,노,초,파
// div 태그가 width 100 height 100 border 1px solid black
// 여기서 위의 다섯개의 버튼 중 하나를 누르면
// div 의 backgroundcolor -> 해당색으로 변경

const btn1 = document.createElement("button");
btn1.innerText = "빨강";
btn1.style.color = "red";
btn1.style.backgroundColor = "black";
const btn2 = document.createElement("button");
btn2.innerText = "주황";
btn2.style.color = "orange";
btn2.style.backgroundColor = "black";
const btn3 = document.createElement("button");
btn3.innerText = "노랑";
btn3.style.color = "yellow";
btn3.style.backgroundColor = "black";
const btn4 = document.createElement("button");
btn4.innerText = "초록";
btn4.style.color = "green";
btn4.style.backgroundColor = "black";
const btn5 = document.createElement("button");
btn5.innerText = "파랑";
btn5.style.color = "blue";
btn5.style.backgroundColor = "black";

const btnbox = document.createElement("div");

btnbox.style.width = "100px";
btnbox.style.height = "100px";
btnbox.style.border = "1px solid black";

btn1.addEventListener("click", () => {
  btnbox.style.backgroundColor = "red";
});

btn2.addEventListener("click", () => {
  btnbox.style.backgroundColor = "orange";
});

btn3.addEventListener("click", () => {
  btnbox.style.backgroundColor = "yellow";
});

btn4.addEventListener("click", () => {
  btnbox.style.backgroundColor = "green";
});

btn5.addEventListener("click", () => {
  btnbox.style.backgroundColor = "blue";
});

document.body.appendChild(btnbox);
document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(btn4);
document.body.appendChild(btn5);

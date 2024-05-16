// 1번 문제 : 유저에게 밑변, 높이 입력 받고 정삼각형의 넓이 출력

const side = window.prompt("밑변 입력");
const height = window.prompt("높이 입력");

const resultBox = document.createElement("div");
resultBox.style.width = "100px";
resultBox.style.height = "100px";
resultBox.style.border = "1px solid black";
document.body.appendChild(resultBox);
const totalWidth = Number(side * height * 0.5);
resultBox.innerText = `${totalWidth}`;

// --------------------------------------------------
// 2번 문제 : 한화 원 을 입력하면 엔화로 계산해서 출력

const won = window.prompt("한화 (원) 입력");
currencyBox = document.createElement("div");
currencyBox.style.width = "100px";
currencyBox.style.height = "100px";
currencyBox.style.border = "1px solid black";
document.body.appendChild(currencyBox);

const yen = Number(won / 8.76);
currencyBox.innerText = `${won}원 = ${yen}엔`;

// 데이터 타입 : 기본[String, number, boolean, null, undefined] & 참조[Array]
// Array

// const colors = ["#2ecc71", "#1B1464", "#8e44ad", "#c0392b"];
// colors.push("#0652DD"); // push - 배열에 추가
// colors.sort(); // sort - 배열을 정렬

// colors.forEach((x) => {
//   const divBox = document.createElement("div");
//   divBox.style.width = "100px";
//   divBox.style.height = "100px";
//   divBox.style.backgroundColor = x;
//   document.body.style.display = "flex";
//   document.body.appendChild(divBox);
//   console.log(x);
// }); // forEach - 요소를 하나씩 호출

// const menu = ["americano", "latte", "espresso", "bubbletea", "hotchoco"];

// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const prices = [2000, 3000, 5000, 3000, 4000, 6000];

// prices.forEach((x) => {
//   if (x < 3000) {
//     console.log("신발보다 싸다 !");
//   } else {
//     console.log("창렬 !");
//   }
// });

// replace("타겟","수정 값") -> 타겟을 수정 값으로 수정
// replaceAll("타겟","수정 값") -> 문자열 내의 모든 타겟을 수정 값으로 수정
// slice("타겟인덱스,자를 범위") -> 타겟인덱스부터 자를 범위 '이전 -1'까지 잘라냄
//

// const option = ["100 blue", "200 green", "500 black", "400 red"];
// // wh : 100 bg : blue wh : 200 bg : green

// const addBoxBtn = document.createElement("button");
// addBoxBtn.innerText = "색깔 바꾸기";
// document.body.appendChild(addBoxBtn);

// addBoxBtn.addEventListener("click", () => {
//   const tempSetting = window.prompt("크기 헥사코드 입력");
//   const tempArray = tempSetting.split(" ");
//   const colorBox = document.createElement("div");
//   colorBox.style.width = tempArray[0] + "px";
//   colorBox.style.height = tempArray[0] + "px";
//   colorBox.style.backgroundColor = tempArray[1];
//   document.body.appendChild(colorBox);
// });

// option.forEach((x) => {
//   const tempArray = x.split(" ");
//   const colorBox = document.createElement("div");
//   colorBox.style.width = tempArray[0] + "px";
//   colorBox.style.height = tempArray[0] + "px";
//   colorBox.style.backgroundColor = tempArray[1];

//   document.body.appendChild(colorBox);
// });

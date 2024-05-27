// 색상 버튼 3개 임의로 만들기
// 파레트 상자 w 100 h 100 하나 만들기
// - , + 버튼 만들기 -> 파레트상자 width height

const paletteBox = document.createElement("div");
const colorBtn1 = document.createElement("button");
const colorBtn2 = document.createElement("button");
const colorBtn3 = document.createElement("button");
const plustBtn = document.createElement("button");
const minusBtn = document.createElement("button");

paletteBox.style.width = "100px";
paletteBox.style.height = "100px";
paletteBox.style.border = "1px solid black";
paletteBox.style.backgroundColor = "white";
const colorName = String(paletteBox.style.backgroundColor);
paletteBox.innerText = "선택된 색 : 없음";
let boxWidth = 100;
let boxHeight = 100;

colorBtn1.style.color = "red";
colorBtn1.innerText = "빨간색";
colorBtn2.style.color = "skyblue";
colorBtn2.innerText = "하늘색";
colorBtn3.style.color = "green";
colorBtn3.innerText = "초록색";

plustBtn.innerText = "+";
minusBtn.innerText = "-";

colorBtn1.addEventListener("click", () => {
  paletteBox.style.backgroundColor = "red";
  paletteBox.innerText = `선택된 색 : red`;
});
colorBtn2.addEventListener("click", () => {
  paletteBox.style.backgroundColor = "skyblue";
  paletteBox.innerText = `선택된 색 : skyblue`;
});
colorBtn3.addEventListener("click", () => {
  paletteBox.style.backgroundColor = "green";
  paletteBox.innerText = `선택된 색 : green`;
});

plustBtn.addEventListener("click", () => {
  const length = parseInt(paletteBox.style.width) + 1;
  paletteBox.style.width = `${length}px`;
  paletteBox.style.height = `${length}px`;
});

// minusBtn.addEventListener("click", () => { // 코드가 더럽다
//   const height = parseInt(paletteBox.style.height) - 1;
//   paletteBox.style.width === "100px" || paletteBox.style.height === "100px"
//     ? (paletteBox.style.width = "100px")
//     : (paletteBox.style.width = `${height}px`);

//   paletteBox.style.width === "100px" || paletteBox.style.height === "100px"
//     ? (paletteBox.style.height = "100px")
//     : (paletteBox.style.height = `${height}px`);
// });

minusBtn.addEventListener("click", () => {
  const length = parseInt(paletteBox.style.width) - 1;
  const isLength99 = length === 99;
  paletteBox.style.width = isLength99 ? "100px" : `${length}px`;
  paletteBox.style.height = isLength99 ? "100px" : `${length}px`;
});

document.body.appendChild(paletteBox);
document.body.appendChild(colorBtn1);
document.body.appendChild(colorBtn2);
document.body.appendChild(colorBtn3);
document.body.appendChild(plustBtn);
document.body.appendChild(minusBtn);

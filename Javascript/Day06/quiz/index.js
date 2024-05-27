// 색깔 5개, 사이즈 5개 , 테두리 사이즈 3개
const colorBtns = [];
const sizeBtns = [];
const borderBtns = [];

const colorSets = ["red", "blue", "orange", "green", "darkviolet"];
const sizeSets = ["100px", "150px", "200px", "250px", "300px"];
const borderSets = ["0px", "10px", "20px"];

const divBox = document.querySelector(".box");
const colorBtnBox = document.querySelector(".colorBtnContainer");
const sizeBtnBox = document.querySelector(".sizeBtnContainer");
const borderBtnBox = document.querySelector(".borderBtnContainer");

colorSets.forEach((v) => {
  const tempBtns = document.createElement("button");
  tempBtns.innerText = v;
  tempBtns.style.color = v;
  colorBtnBox.appendChild(tempBtns);
  colorBtns.push(tempBtns);
});

sizeSets.forEach((v) => {
  const tempBtns = document.createElement("button");
  tempBtns.innerText = v;
  sizeBtnBox.appendChild(tempBtns);
  sizeBtns.push(tempBtns);
});

borderSets.forEach((v) => {
  const tempBtns = document.createElement("button");
  tempBtns.innerText = v;
  borderBtnBox.appendChild(tempBtns);
  borderBtns.push(tempBtns);
});

colorBtns.forEach((v) => {
  let colorName = v.innerText;
  v.addEventListener("click", () => (divBox.style.backgroundColor = colorName));
});

sizeBtns.forEach((v) => {
  let sizeName = v.innerText;
  v.addEventListener("click", () => {
    divBox.style.width = sizeName;
    divBox.style.height = sizeName;
  });
});

borderBtns.forEach((v) => {
  let borderName = v.innerText;
  v.addEventListener("click", () => (divBox.style.borderRadius = borderName));
});

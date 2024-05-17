// - 0 +

const minusBox = document.createElement("button");
const plusBox = document.createElement("button");
const displayBox = document.createElement("div");

minusBox.innerText = "-";
plusBox.innerText = "+";
displayBox.innerText = "0";

minusBox.addEventListener("click", () => {
  const isMinus = parseInt(displayBox.innerText) === 0;
  const displayNum = parseInt(displayBox.innerText);
  displayNum < 0 ? !isMinus : isMinus;
  isMinus == true
    ? (displayBox.innerText = "0")
    : (displayBox.innerText = parseInt(displayBox.innerText) - 1);
});

plusBox.addEventListener("click", () => {
  displayBox.innerText = parseInt(displayBox.innerText) + 1;
});

document.body.appendChild(minusBox);
document.body.appendChild(displayBox);
document.body.appendChild(plusBox);

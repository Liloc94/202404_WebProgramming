const minustBtn = document.createElement("button");
minustBtn.innerText = "-";

const plusBtn = document.createElement("button");
plusBtn.innerText = "+";

const displayDiv = document.createElement("div");
displayDiv.innerText = "0";

document.body.style.display = "flex";
document.body.style.gap = "10px";
document.body.appendChild(minustBtn);
document.body.appendChild(displayDiv);
document.body.appendChild(plusBtn);

minustBtn.addEventListener("click", () => {
  displayDiv.innerText = Number(displayDiv.innerText) - 1;
});

plusBtn.addEventListener("click", () => {
  displayDiv.innerText = Number(displayDiv.innerText) + 1;
});

const pwBox = document.querySelector(".pwBox");
const vBtn = document.querySelector(".visibleBtn");
const EyeBtn = document.querySelector(".invisibleBtn");
const pwBoxType = pwBox.type;
EyeBtn.style.display = "none";
const isVisible = pwBox.type == "text";

vBtn.addEventListener("click", () => {
  if (!isVisible) {
    pwBox.type = "text";
    EyeBtn.style.display = "inline";
    vBtn.style.display = "none";
  }
});

EyeBtn.addEventListener("click", () => {
  pwBox.type = "password";
  vBtn.style.display = "inline";
  EyeBtn.style.display = "none";
});

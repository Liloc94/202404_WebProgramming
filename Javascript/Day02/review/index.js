const a = document.querySelector(".barIcon");
const b = document.querySelector(".xIcon");

b.style.display = "none";

a.addEventListener("click", () => {
  a.style.display = "none";
  b.style.display = "block";
});

b.addEventListener("click", () => {
  a.style.display = "block";
  b.style.display = "none";
});

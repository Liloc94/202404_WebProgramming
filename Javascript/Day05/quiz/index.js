const menu = [];
// 메뉴를 입력 후 제출버튼 누르면
// menu에 글이 누적되면서 추가됩니다.

const addInput = document.querySelector(".menuAdd");
const submitBtn = document.querySelector(".submitBtn");
const menuDiv = document.querySelector(".menu");

submitBtn.addEventListener("click", () => {
  const iv = addInput.value;
  let menuTexts = "";
  menuDiv.innerText = menuTexts;
  menu.push(iv);
  menu.forEach((v) => {
    menuDiv.innerText = `${(menuTexts += v)}`;
  });
});

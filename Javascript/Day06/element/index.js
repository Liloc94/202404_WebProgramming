// html 생성하고, css 만들고, JavaScript로 기능 구현

// 기본타입 : string, number, boolean, null, undefined
// 참조타입 : array, element
// DOM 의 element타입

const divTag = document.createElement("div");

// divTag.appendChild() 자식 태그 추가하기
// divTag.removeChild() 자식태그 중 해당태그 지우기

// divTag.style     직접 css 관여
// divTag.classList 클래스 리스트 보기
// divTag.classList.add("red") 클래스 리스트에 .red 추가
// divTag.classList.remove("red") 클래스 리스트에 .red 삭제
// divTag.classList.toggle("red") 클래스 리스트에 red가 있으면 삭제 없으면 추가

// const divTag1 = document.querySelector(".box"); // element || null 타입

const divBox = document.querySelector(".box");
const ccBtn = document.querySelector(".changeColorBtn");
const suBtn = document.querySelector(".sizeUpBtn");
const sbBtn = document.querySelector(".shaveBorderBtn");

suBtn.addEventListener("click", () => {
  divBox.classList.toggle("medium");
  divBox.classList.toggle("large");
  suBtn.innerText = suBtn.innerText == "늘리기" ? "줄이기" : "늘리기";
});

ccBtn.addEventListener("click", () => {
  ccBtn.innerText = ccBtn.innerText == "빨간색" ? "파란색" : "빨간색";
  divBox.classList.toggle("red");
  divBox.classList.toggle("blue");
});

sbBtn.addEventListener("click", () => {
  sbBtn.innerText =
    sbBtn.innerText == "모서리깎기" ? "모서리세우기" : "모서리깎기";
  divBox.classList.toggle("roundborder");
});

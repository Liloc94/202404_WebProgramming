// const input = document.querySelector(".input");

// input을 입력하고 확인 버튼을 눌렀을 때,
// 8 글자 이하이면 글자수가 짧습니다[빨간색] 나오고
// 아니면 글자수가 충분합니다[파란색] 나오게 하기

// const button = document.querySelector(".confirmBtn");
// const msgBox = document.createElement("div");
// document.body.appendChild(msgBox);

// button.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     msgBox.style.color = "red";
//     msgBox.innerText = "글자수가 짧습니다.";
//   } else {
//     msgBox.style.color = "blue";
//     msgBox.innerText = "글자수가 충분합니다.";
//   }
// });

// 8 ~ 20 글자 사이, 아니면 8 ~ 20 글자 사이로 글자를 만들어주세요
// 반드시 !,#,$ 중 하나라도 포함, 아니면 반드시 !,#,$ 이 포함되어야 해요!
// 글자의 시작을 'IT'로 하면, 아니면 반드시 'IT'로 시작해야 해요!
// 올바르게 문자를 설정했습니다.

const confirmBtn = document.querySelector(".confirmBtn");
const input = document.querySelector(".input");
const msgBox = document.querySelector(".msg");

confirmBtn.addEventListener("click", () => {
  const inputValue = input.value;
  const isValidLength = 8 <= inputValue.length && inputValue.length <= 20;
  const isValidSpecialChar =
    inputValue.includes("!") ||
    inputValue.includes("$") ||
    inputValue.includes("#");
  const isIncludeWord = inputValue.startsWith("IT");

  msgBox.style.color = "red";

  if (!isValidLength) {
    msgBox.innerText = "8 ~ 20 글자 사이로 글자를 만들어주세요";
  } else if (!isValidSpecialChar) {
    msgBox.innerText = "반드시 !,#,$ 이 포함되어야 해요!";
  } else if (!isIncludeWord) {
    msgBox.innerText = "반드시 'IT'로 시작해야 해요!";
  } else {
    msgBox.innerText = "올바르게 문자를 설정했습니다.";
    msgBox.style.color = "blue";
  }
});

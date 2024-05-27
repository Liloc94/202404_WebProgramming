// 커피 input
// 가격 input - 숫자여야만 함 [ 1000 이상부터 가능 ]
// - 1000원 이상 입력해야 합니다
// 수량 input - 숫자여야만 하지만 [ 1 ~ 10000 가능 ]
// - 1 ~ 10000 사이의 숫자만 입력 가능합니다.
// 제출하기 button

// 3개 글자가 0이 아니어야 제출이 가능함.

// 커피 재고 리스트
// 아메리카노 3000원 10000개
// 라떼 3500원 3000개

// 맨 밑 총 갯수 : 13000개

const coffeeInput = document.querySelector(".coffee");
const priceInput = document.querySelector(".price");
const amountInput = document.querySelector(".amount");
const admitBtn = document.querySelector(".confirmBtn");
const msgBox = document.querySelector(".msgBox");
const totalBox = document.querySelector(".totalBox");
let totalBoxState = 0;

admitBtn.addEventListener("click", () => {
  msgBox.style.color = "red";
  const coffeeValue = coffeeInput.value;
  const priceValue = priceInput.value;
  const amountValue = amountInput.value;
  const isOverThousand = priceValue >= 1000;
  const isOverZero_Max = amountValue > 0 && amountValue <= 10000;
  const isAllValid =
    !!coffeeValue.length && !!priceValue.length && !!amountValue.length;

  if (!isAllValid) {
    msgBox.innerText = "모든 값이 입력되어야 합니다 !!";
  } else if (!isOverThousand) {
    msgBox.innerText = "1,000원 이상부터 입력 가능합니다.";
  } else if (!isOverZero_Max) {
    msgBox.innerText = "1 ~ 10000 사이의 개수만 입력 가능합니다.";
  } else {
    msgBox.innerText = "재고 수량이 추가되었습니다.";
    msgBox.style.color = "blue";
    const coffeeListDiv = document.querySelector(".coffeeList");
    const divTag = document.createElement("div");

    divTag.innerText = `${coffeeValue} : ${priceValue}원 / 수량 : ${amountValue} 개`;
    coffeeListDiv.appendChild(divTag);

    totalBoxState += Number(amountValue);
    totalBox.innerText = `총 개수 : ${totalBoxState}개`;
  }
});

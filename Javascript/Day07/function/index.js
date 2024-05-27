// 함수(기능) : input -> output (초 간단)

// 일반함수
// function 함수명 (매개변수) { return 리턴값}

function makeCoffee(/* input */ x) {
  return x + "완료되었습니다.";
  /* output */
}
// const a = makeCoffee("아메리카노");
// const b = makeCoffee("연유라떼");

// 제곱해서 반환하는 함수 만들어보기
function makeSquare(x) {
  return x ** 2;
}

// 화살표 함수 (중요 !!!)
// ()=>{}

const makeBread = (x) => {
  return x + "빵이 구워졌습니다.";
};

const a = makeBread("단판");

// 1. 어떤 수를 입력하면 세제곱을 돌려주는 함수
// 2. 대문자 입력 시 소문자 + '완료!' 를 돌려주는 함수
// 3. 어떤 x를 입력하면, truthy인지 falsy인지 알려주는 함수

const makeThreeSquare = (x) => x ** 3;
const toLowerWords = (x) => x.toLowerCase() + "완료!";
const isTruthy = (x) => (!!x ? "truthy" : "falsy");

// x를 받으면 body 태그에 x의 innerText를 가진 버튼추가 함수
const makeButton = (x) => {
  const tempBtn = document.createElement("button");
  tempBtn.innerText = x;
  document.body.appendChild(tempBtn);
};

// Day06 Quiz 의 기능 함수화 해보기

const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["small", "medium", "large", "x-large", "XX-large"];
const borderRadiList = ["borderRadi-0", "borderRadi-10", "borderRadi-20"];

const makeButtons = (x, y) => {
  x.forEach((v) => {
    const tempBtn = document.createElement("button");
    tempBtn.innerText = v;
    tempBtn.addEventListener("click", () => {
      const box = document.querySelector(".box");
      // 컬러 클래스가 누적되지 않도록 forEach를 사용해 모두 삭제
      x.forEach((v) => box.classList.remove(v));
      // 이후 원하는 색의 클래스만 추가
      box.classList.add(v);
    });
    const listTag = document.querySelector(y);
    listTag.appendChild(tempBtn);
  });
};

makeButtons(colorList, `.colorBtnList`);
makeButtons(sizeList, `.sizeBtnList`);
makeButtons(borderRadiList, `.radiusBtnList`);

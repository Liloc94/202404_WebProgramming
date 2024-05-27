// 참조 타입 :
// 프로그래밍 타입 : Array , Object , Function
// HTML에서 가져온 타입 : Element , event

const input = document.querySelector(".input");

// 10글자 이상부터 글씨를 빨간색으로 변경해보기
// input.addEventListener("input", (e) => {
//   const isOverTenChar = e.target.value.length > 10;
//   isOverTenChar ? (input.style.color = "red") : (input.style.color = "black");
// });

input.addEventListener("input", (e) => {
  e.target.value =
    e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
});

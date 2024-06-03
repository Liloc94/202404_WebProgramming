"use strict";
// 동기
console.log(1);
// 비동기[데이터 가져오기, 지도 위치 가져오기, 시간초 재기]
setTimeout(() => {
    console.log(2);
}, 1000);
setInterval(() => { }, 1000);
console.log(3);
console.log(4);
// let countingNum = 0;
// setInterval(() => {
//   countTag.innerText = String(countingNum++);
// }, 1000);
// setInterval(() => {
//   const countTag = document.querySelector(".counter") as HTMLParagraphElement;
//   Number(countTag.innerText) = Number(countTag.innerText)+1);
// }
// , 1000);
// 1. 현재 날짜 html 에 나타내기
const countTag = document.querySelector(".counter");
setInterval(() => {
    let today = new Date();
    const week = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];
    let dayOfWeek = week[today.getDay()];
    countTag.innerText = String(today.toLocaleString("ko-KR") + " " + dayOfWeek);
}, 1000);

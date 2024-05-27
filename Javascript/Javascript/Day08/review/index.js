// 1. [일반함수] function name( x, y ){ return ? }
// 2. [화살표함수] const name = (x) => { return ? }
// 3. [익명(이름없는)함수]
// [ 특징 : 1. 일회성, 2. 이벤트성 ]
// 1) function () {}
// 2) () => {}

// 기본 타입변환 : String() / "", Number() / 123, Boolean() / !!
// 참조 타입변환 : Array() / [] , Function() / ()=>{} , Object() / {}

const arr = Array(1000)
  .fill(1)
  .map((v, i) => i);

const airplane = {
  name: "보잉747",
  company: "에어서울",
  passengers: 200,
  airport: {
    start: "인천공항",
    destination: "나리타공항",
  },
};
console.log(airplane.airport.start);
console.log(airplane.airport.destination);

// 1. 정수 n과 k가 주어졌을 때, 1 이상 n 이하의 정수 중 k 의 배수를
// 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성시켜라.

// n k result
// 10 3 [3, 6, 9]
// 15 5 [5, 10, 15]

function solution(n, k) {
  return Array(n)
    .fill(1)
    .map((v, i) => i + 1)
    .filter((v) => v % k == 0);
}

const solution2 = (n, k) => {
  Array(n / k)
    .fill(1)
    .map((v, i) => (i + 1) * k)
    .filter((v) => v % k == 0);
};

// 2. 문자열 배열 strArr가 주어집니다.
// 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함한 모든 문자열을 제거하고
// 남은 문자열을 순서를 유지한 상태의 배열로 return 하는 solution 함수 생성
// ex) strArr result
// ["and","notad","abcd"] => ["and",abcd]
// ["there","are","no","a","ds"] => ["there", "are", "no", "a", "ds"]

const strArr = (tempArr) => {
  return tempArr.filter((v) => !v.includes("ad"));
};

// 데이터 타입 : 기본 + 참조
// 기본 : number, string, null, undefined, boolean
// 참조 : array

// str = String() or "" or `` or +
// number = Number() or 123123 or +
// boolean = Boolean() or true or !
// Array = Array() or []

const coffees = Array("americano", "latte", "...");

// 인덱스
// fruits[0]; // apple
// fruits[1]; // banana

// // 추가 및 갱신
// fruits.push("grape");
// fruits[0] = "mango";

// // 삭제
// fruits.pop(); // 맨 뒤에 삭제
// delete fruits[1]; // banana 삭제

// 가공하는 기능
// 1. 변형 [바꾸기] - push, pop, reverse, shift[맨 앞 요소 제거], sort
// 2. 접근자 - indexof[x번째], slice[자르고 새 배열로 반환]
// 3. (☞ﾟヮﾟ)☞반복 - forEach, map

// const num = [3, 7, 2, 91, 309, 23, 124];
// const fruits = ["apple", "banana", "orange", "kiwi"];

// ---------------------------------map ------------------------
// 요소 바꾸기
// const newArr = num.map((v) => v + 10);
// console.log(newArr);

// const newArr2 = num.map((v) => v + 100);
// console.log(newArr2);

// const newArr3 = num.map((v) => v ** 2);
// console.log(newArr3);

// const newArr4 = num.map((v) => (v % 2 == 0 ? v + 100 : v ** 2));
// console.log(newArr4);

// a 포함 시 대문자로, 아니면 icecream
// const newArr5 = fruits.map((v) => v.includes("a") ? v.toUpperCase() : "icecream");
// console.log(newArr5);

// ----------------------------------filter--------------------------------
// const num = [3, 7, 2, 91, 309, 23, 124];
// const fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "kiwi",
//   "mango",
//   "durian",
//   "strawberry",
//   "watermelon",
// ];

// const numArr = num.filter((v) => v > 10);

// const numArr1 = num.filter((v) => v % 2 == 0);

// const fruitsArr = fruits.filter((v) => v.length >= 6);

// // 'i' 가 들어가있으면 제거하고 이후 나머지는 단어의 문자길이로 치환
// const fruitsArr3 = fruits
//   .filter((v) => !v.includes("i"))
//   .map((v) => v.length);

// console.log(numArr);
// console.log(numArr1);
// console.log(fruitsArr);
// console.log(fruitsArr3);

//--------------------------- every & some --------------------------------
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const everyArr = num.every((v) => v > 0);

// const someArr = num.some((v) => v >= 10);

// console.log(`everyArr:${everyArr}`);
// console.log(`someArr:${someArr}`);

// type casting : Number(), String(), Boolean()

// String -> Array
const coffee: String = "americano";

// split("") , Array.from() ,
const a1: Array<String> = coffee.split("");
const a2: Array<String> = Array.from(coffee);
const a3: Array<String> = [...coffee]; // 많이 사용되는 array 타입캐스팅!!

// Quiz. [m,r,c,n] 출력하기
const mrcn = [...coffee].filter((v) => ![..."aieo"].some((v1) => v1 == v));
console.log(mrcn);

// Quiz. "americano" 의 알파벳 e만 대문자로 나머지는 배열로반환
const eUpper = [...coffee].map((v) => (v == "e" ? v.toUpperCase() : v));
console.log(eUpper);

// Array -> String
const fruits = ["apple", "banana", "orange"];

// join('')
// applebananaorange
const b1 = fruits.join();
const b2 = fruits.toString(); // -> 사용 지양
// apple,banana,orange 쉼표로 구분하여 반환

// Quiz. 'a' 를 빼고 다시 반환

const b3 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join(""));
console.log(b3);

const vowels = [..."aieouAIEOU"];
const noVowels = [...coffee].filter((v) => !vowels.some((v1) => v1 == v));
console.log(noVowels);

// Quiz. 모든 알파벳 분리하기
const makeFlat = fruits.map((v) => [...v]).flat();
const sumAll = [...fruits.join("")];
console.log(sumAll);

// reduce[누적시키다] acc[누적값],curr[현재] !!!! 중요 !!!!
[1, 3, 5, 7, 9].reduce((a, c) => {
  console.log(`a:${a}, c:${c}`);
  return a + c;
});

// 1 ~ 100 까지의 합을 구하는 로직
Array(10)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((a, c) => {
    console.log(`a:${a}, c:${c}`);
    return a + c;
  });

// Quiz.
// [1 ~ 10] 홀수는 더하고 짝수는 뺀 결과값 반환
// 1 - 2 + 3 - 4 + 5 - 6 + 7 - 8 + 9 - 10

const result = Array(10)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((a, c) => {
    return c % 2 != 0 ? a + c : a - c;
  });

const correct = Array(10)
  .fill(0)
  .map((v, i) => (i % 2 ? -(i + 1) : i + 1))
  .reduce((a, c) => a + c);
// % 반환값이 0 이나 1인 것을 이용해 삼항연산자 활용

console.log(result);
console.log(correct);

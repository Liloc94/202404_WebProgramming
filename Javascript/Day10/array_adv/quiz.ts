// 함수 만들기

// 1.
// my_string n result
// "hello" 3 "hhheeellllllooo"
let myString: String = "hello";
const charTimes = (tempString: String, repeatTime: number) => {
  return [...tempString].map((v) => v.repeat(repeatTime)).join("");
};
console.log(charTimes(myString, 3));

// 2.
// myString result
// "abstract algebra" "AbstrAct AlgebrA"
// "PrOgRaMmErS" "progrAmmers"
let my_string = "abstract algebra";
const changeCase = (tempString: String) => {
  return [...tempString]
    .map((v) => (v == "a" ? "A" : v.toLocaleLowerCase()))
    .join("");
};

console.log(changeCase(my_string));

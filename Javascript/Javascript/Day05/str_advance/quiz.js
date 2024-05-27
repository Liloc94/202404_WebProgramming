const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"];

// 1. a 가 포함되어 있으면, 대문자화 시키고 아니면 '🤐' 출력

// 2. b 가 포함되어 있으면, b기준으로 단어를 쪼개서 배열화, 아니면 '🤐'출력

// 3. n 이 포함되어 있으면 기존에 있던 단어들을 결합해서 최종 단어 보여주기

// 4. 문자의 길이가 6글자 이상이면 알파벳 a 를 k로 치환하여 출력하고, 아니면 대문자화해서 출력

fruits.forEach((v) => {
  if (v.includes("a")) {
    console.log(v.toUpperCase());
  } else {
    console.log("🤐");
  }
  // console.log(v.includes("a") ? v.toUpperCase() : "🤐"); 결과 2가지로 제한일 때는 삼항연산자가 보기편하다
});

fruits.forEach((v) => {
  if (v.includes("b")) {
    console.log(v.split("b"));
  } else {
    console.log("🤐");
  }
  // console.log(v.includes("b") ? v.split("b") : "🤐");
});

let tempString = "";
fruits.forEach((v) => {
  if (v.includes("n")) {
    tempString += v;
  }
});
console.log(tempString);

fruits.forEach((v) => {
  if (v.length >= 6) {
    console.log(v.replace("a", "k"));
  } else {
    console.log(v.toUpperCase());
  }
  // console.log(v.length >= 6 ? v.replace("a","k") : v.toUpperCase());
});

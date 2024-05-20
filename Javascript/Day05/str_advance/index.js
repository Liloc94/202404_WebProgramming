const coffee = "americano";

// 문자열 검색
coffee.indexOf("cano"); // 인덱스의 몇 번째인지 알려줌 [number]
coffee.includes("cano"); // 포함 하는지 알려줌 [boolean]
coffee.startsWith("am"); // 시작하는지 알려줌 [boolean]

console.log(coffee.indexOf("cano")); // 5
console.log(coffee.includes("cano")); // true
console.log(coffee.startsWith("am")); // true

// 문자열 변환
coffee.toUpperCase(); //  대문자화 결과 [String]
coffee.toLocaleLowerCase(); // 소문자화 결과 [String]
coffee.trim();

console.log(coffee.toUpperCase()); // AMERICANO
console.log(coffee.toLocaleLowerCase()); // americano

// 문자열 추출
coffee.slice(0, 5); // 0 ~ 4 번 까지 자르기 결과 [String]
coffee.substring(0, 5); // 0 ~ 4 번 까지 문자열 반환 결과 [String]

console.log(coffee.slice(0, 5));

// 문자열 분할 및 결합
coffee.split("i"); // i 기준으로 분할 ["amer","cano"] 결과 [array]
coffee.concat("latte"); // americanolatte 문자열 결합 결과 [String]

console.log(coffee.split("i"));
console.log(coffee.concat("latte"));

// 문자열 치환
coffee.replace("cano", "latte"); // amerilatte 문자치환 결과 [String]
coffee.trim(); // 좌우 공백 제거 결과 [String]

console.log(coffee.replace("cano", "latte"));
console.log(coffee.trim());

let a = 123; // let const var
// var 사용 금지
// 이유 : 전역 영역[글로벌 호이스팅]

// es6(2015) let & const
// let 은 재수정 가능
a = 345;
// const 재수정 불가
const button = document.createElement("button");
// button = 1; -> 불가능

// 변수명 이름 문법
// 1. 예약어 사용 불가 ex) const const =
// 2. $ 와 _ 를 제외한 특수문자 사용불가
// 3. 변수명 중복 불가
// 4. 숫자로 시작 불가 ex) const a1 (o), const 1a (x)

// 변수명 이름 국룰
// 1. 소문자로 작성
// 2. 의미있는 단어로 작성
//  1) 구체성 button -> skyblueButton
//  2) has, is -> isDarkMode , hasClassName
// 3. 두 단어 이상 합치면
//  1) camelCase : addNumber
//  ex) a.style.backgroundColor = "black";
//  2) snake_case : add_number

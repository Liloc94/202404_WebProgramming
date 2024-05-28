// [destructuring] : 분해

const days: Array<String> = ["월", "화", "수", "목", "금", "토", "일"];

const [monday, tuesday, wednsday, ...rest] = days;
// [월, 화, 수, 목금토일] 로 배열을 destructuring 하는 문법

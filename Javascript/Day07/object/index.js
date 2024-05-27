// 참조 : array, element, object

const coffee = {
  coffeeName: "아메리카노",
  coffeePrice: 2000,
  hasShot: true,
};
const coffee1 = {
  coffeeName: "라떼",
  coffeePrice: 2500,
  hasShot: true,
};

// book object 만들어보기
// 제목, 저자, 출판연도, 페이지수

const book = {
  bookTitle: "어린왕자",
  bookAuthor: "쌩떼쥐패리",
  publishedYear: 1984,
  pages: 524,
};

book["title"]; // 어린왕자
book.title; // 어린왕자

book.color = "green"; // color : "green" 추가
delete book.pages; // pages 삭제

"bookAuthor" in book; // true or false 로 요소 존재여부 체크

const youtubers = [
  {
    name: "슈카월드",
    subscribers: 3000000,
    genre: ["economics", "entertainment"],
  },
  {
    name: "침투부",
    subscribers: 1200000,
    genre: ["game", "life", "entertainment"],
  },
  {
    name: "곽튜브",
    subscribers: 800000,
    genre: ["journey", "entertainment"],
  },
];

youtubers.forEach((v, i) => {
  console.log(`${i}.유튜버 : ${v.name}`);
});

// 구독자 200만 이상 필터링 후 장르 반환

youtubers
  .filter((v) => v.subscribers >= 2000000)
  .forEach((v) => console.log(v.genre));

// 구독자 1만단위로 변경 장르를 대문자화

youtubers
  .map((v) => {
    v.subscribers = v.subscribers / 10000 + "만";
    v.genre.map((v) => v.toUpperCase());
    return v;
  })
  .forEach((v, i) => console.log(i, v));

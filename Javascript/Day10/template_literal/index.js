"use strict";
const box = document.querySelector(".box");
const books = [
    {
        title: "자바스크립트 꿀잼",
        author: "손흥민",
        price: 30000,
        isSale: true,
    },
    {
        title: "타입스크립트 안쓰는법",
        author: "황희찬",
        price: 24000,
        isSale: false,
    },
    {
        title: "구글링 하다가 막혔을 때 코딩하는법",
        author: "김민재",
        price: 14000,
        isSale: true,
    },
];
// isSale: true -> 가격 10%할인된 가격으로 나타내기
const isBookSale = (book) => book.isSale ? book.price * 0.9 : book.price;
if (box != null) {
    box.innerHTML = `
  ${books.map((v) => `
  <h1>${v.title}</h1>
  <h4>${v.author}</h4>
  <span>${isBookSale(v)}</span>
  `)}
  `;
}
// box.insertAdjacentHTML(어디에,무엇을)
// afterbegin : 맨 처음 자식으로
// beforeend : 맨 뒤 자식으로
// box.insertAdjacentHTML(
//   "beforeend",
//   `
//   <h1>${books[0].title}</h1>
//   <h3>${books[0].author}</h3>
//   <span>${isBookSale(books[0])}</span>
//   `
// );
const makeBook = (book) => `
<h1>${book.title}</h1>
<h3>${book.author}</h3>
<span>${isBookSale(book)}</span>
`;
if (box != null) {
    books.map((v) => box.insertAdjacentHTML("beforeend", makeBook(v)));
}

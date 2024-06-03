// Date, Array, Boolean, ...

// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값을 나타내는 객체
// ing, 성공, 실패 -> 총 3가지 결과값을 반환할 수 있다.
// pending(ing), fullfilled(성공), rejected(실패)
const a = new Promise((succeed, failed) => {
  setTimeout(() => {
    succeed("happy js");
  }, 3000);
});

a.then((x) => console.log(x));
// then : promise 변수의 결과값이 반환되었을 때, 그 결과값의 handler

const b = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
b.then((x) => x.json()).then((x) => console.log(x));

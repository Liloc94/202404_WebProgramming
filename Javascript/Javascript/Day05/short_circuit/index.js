// short_circuit

true || "Dog"; // true
false || "Dog"; // "Dog"
true && "Dog"; // "Dog"
false && "Dog"; // false

const userName = prompt("유저 입력");
const name = userName || "Guest";

console.log(`${name}님 환영합니다 !`);

const isLoggedIn = true; // 서버 연결 이후 로그인 로직 작성

isLoggedIn && console.log("로그인 성공");
!isLoggedIn || console.log("로그인 실패");

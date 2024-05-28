interface userTypes {
  id: Number;
  name: String;
  age: Number;
}

const users: userTypes[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

users.map((v) => ({ name: v.name, age: v.age }));
users.map(({ name, age }) => ({ name, age }));
// v는 오브젝트 배열이므로 destructuring 할 수 있다
// destructuring 이후 요소값 변경시 key value 값이 같으면 생략가능

users.map(({ name, age }) => ({ nickName: name, koreaAge: age }));
users.map(({ name: nickName, age: koreaAge }) => ({ nickName, koreaAge }));

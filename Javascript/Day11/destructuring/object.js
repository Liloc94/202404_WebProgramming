"use strict";
const person = {
    name: "John",
    age: 21,
    major: "computer",
};
// const { name, major } = person; 빼내기
// const { name: realName, major: superMajor } = person; 빼면서 별칭설정
// realName; // John
const person1 = {
    name: "Jenny",
    address: {
        city: "bupyeong",
        zipCode: 1004,
    },
};
const { address } = person1; // 주소 빼오기
const { address: { zipCode }, } = person1; // 주소에 있는 zipCode 빼오기
const { zipCode: zip1 } = person1.address; // zipCode 바꾸기
zipCode; // 1004
const user = {
    username: "alice",
    email: "alice@example.com",
    details: {
        firstName: "Alice",
        lastName: "Doe",
    },
};
const { lastName: familyName } = user.details;
console.log(familyName);

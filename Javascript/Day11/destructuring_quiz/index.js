import { dataMapExtract, datas } from "./data.js";
import { delhyphen } from "./data.js";
import { appNameUpper } from "./data.js";
import { moneyAmount } from "./data.js";

// 1. id currency , money , phoneNum 콘솔로
// 2. animalName -> animal, car:{make,model,year} 콘솔로
// 3. ipaddress 맨 마지막 세자리합 10 이사면 id,color 콘솔로
// 4. timezone이 알파벳 모음으로 시작하면 {timezone,carmake,phone 앞 세자리만가져오기}
// 5. money 50000 이하, phone[하이픈제거],appName[대문자화]하고 가져오기

// 1.
// datas.forEach(({ id, currency, money, phoneNum }) =>
//   console.log(`${id}\n${currency}\n${money}\n${phoneNum}`)
// );

// 2.
// const aniCar = datas.map(
//   ({ animalName: animal, carMake, carModel, carModelYear }) => ({
//     animal,
//     car: { carMake, carModel, carModelYear },
//   })
// );
// aniCar.forEach((v) => console.log(v.animal, v.car));

// 3.
// datas.forEach(({ ipAddr, color }) => {
//   const isOverTen =
//     [...ipAddr.slice(ipAddr.lastIndexOf(".") + 1, ipAddr.length)].reduce(
//       (a, c) => parseInt(a) + parseInt(c)
//     ) > 10;
//   return isOverTen ? console.log(`${ipAddr}\n${color}`) : "";
// });

// 4.
// datas.map(({ timeZone, carMake, phoneNum }) => {
//   const slicedNum = phoneNum.slice(0, 3);
//   const vowelArr = ["a", "i", "e", "o", "u", "y"];

//   const hasVowel =
//     [...timeZone.split("/")[0]].some(
//       (v, i) => v.toLowerCase() === vowelArr[i]
//     ) &&
//     [...timeZone.split("/")[1]].some((v, i) => v.toLowerCase() === vowelArr[i]);
//   hasVowel ? console.log(`${timeZone}\n${carMake}\n${slicedNum}`) : "no Data";
// });

// 5.
dataMapExtract(datas);

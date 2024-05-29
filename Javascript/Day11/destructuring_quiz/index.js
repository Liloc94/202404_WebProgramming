import { datas } from "./data.js";
import { dataMapExtract, isOverTen } from "./functions.js";

// 1. id currency , money , phoneNum 콘솔로
// datas.forEach(({ id, currency, money, phoneNum }) =>
//   console.log(`${id}\n${currency}\n${money}\n${phoneNum}`)
// );

// 2. animalName -> animal, car:{make,model,year} 콘솔로
// const aniCar = datas.map(
//   ({
//     animalName: animal,
//     carMake: make,
//     carModel: model,
//     carModelYear: year,
//   }) => ({
//     animal,
//     car: { make, model, year },
//   })
// );
// console.log(aniCar);

// 3. ipaddress 맨 마지막 세자리합 10 이사면 id,color 콘솔로
// datas.forEach(({ ipAddr, color }) => {
//   return isOverTen(ipAddr) ? console.log(`${ipAddr}\n${color}`) : "";
// });

// 4. timezone이 알파벳 모음으로 시작하면 {timezone,carmake,phone 앞 세자리만가져오기}
// datas.map(({ timeZone, carMake, phoneNum }) => {
//   const slicedNum = phoneNum.split("-")[0];
//   const vowelArr = [..."aieouAIEOU"];
//   const hasVowel =
//     [...timeZone.split("/")[0]].some((v, i) => v === vowelArr[i]) &&
//     [...timeZone.split("/")[1]].some((v, i) => v === vowelArr[i]);

//   hasVowel ? console.log(`${timeZone}\n${carMake}\n${slicedNum}`) : "";
// });

// 5. money 50000 이하, phone[하이픈제거],appName[대문자화]하고 가져오기
dataMapExtract(datas);

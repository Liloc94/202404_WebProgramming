import { datas } from "./data.js";

export const delhyphen = (phoneNumber) => phoneNumber.split("-").join("");
// phoneNumber.split("-").join("") - 기준으로 나눈뒤 join으로 병합
// phoneNumber.replaceAll("-", "") - 하이픈만 모두 공백으로 대체

export const toUpperCase = (targetWord) => targetWord.toUpperCase();

export const isOverTen = (strTarget) => {
  return (
    [
      ...strTarget.slice(strTarget.lastIndexOf(".") + 1, strTarget.length),
    ].reduce((a, c) => parseInt(a) + parseInt(c)) > 10
    // 아이피 주소의 마지막 . 이후 숫자들을 하나씩 합한 뒤 그 결과값을
    // 10을 기준으로 Boolean형으로 반환하는 메서드
  );
};

export const toKORCurrency = (moneyInput) => {
  const exchangeRateYen = 8.66; // 환율 계산 변수
  const temp = moneyInput.replace("¥", ""); // 화폐기호 공백으로 대체
  return parseInt(temp) * exchangeRateYen;
};

export const dataMapExtract = (dataObj) => {
  dataObj.map(({ money, phoneNum, appName }) => {
    if (toKORCurrency(money) <= 50000)
      return console.log(
        `Yen : ${money} / Won : ₩${toKORCurrency(money)}\n${delhyphen(
          phoneNum
        )}\n${toUpperCase(appName)}`
      );
  });
};

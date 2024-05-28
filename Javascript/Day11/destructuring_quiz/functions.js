import { datas } from "./data.js";

export const delhyphen = (phoneNumber) => phoneNumber.replaceAll("-", "");
export const appNameUpper = (appName) => appName.toUpperCase();
export const moneyAmount = (money) => {
  const exchangeRateYen = 8.66; // 환율 계산 변수
  const temp = money.replace("¥", "");
  return parseInt(temp) * exchangeRateYen;
};
export const dataMapExtract = (dataObj) => {
  dataObj.map(({ money, phoneNum, appName }) => {
    if (moneyAmount(money) <= 50000)
      return console.log(
        `Yen : ${money} / Won : ₩${moneyAmount(money)}\n${delhyphen(
          phoneNum
        )}\n${appNameUpper(appName)}`
      );
  });
};

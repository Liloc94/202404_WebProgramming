const emailInput = document.querySelector(".emailInput");
const pwInput = document.querySelector(".pwInput");
const pwCheck = document.querySelector(".pwCheck");
const loginBtn = document.querySelector(".loginBtn");
const validEmailForm = ["@naver.com", "@daum.com", "@gmail.com", "@kakao.com"];
const specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-"];

const inputList = [
  {
    className: emailInput,
    validEmailForm: ["@naver.com", "@daum.com", "@gmail.com", "@kakao.com"],
    ispassed: false,
  },
  {
    className: pwInput,
    mustContain: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-"],
    pwCheckValue: "",
    ispassed: false,
  },
  {
    className: pwCheck,
    ispassed: false,
  },
];
inputList.forEach((v) => {
  v.className.addEventListener("input", (e) => {
    if (e.target.className.includes("emailInput")) {
      v.validEmailForm.some((v) => e.target.value.includes(v))
        ? (v.ispassed = true)
        : (v.ispassed = false);
    } else if (e.target.className.includes("pwInput")) {
      v.pwCheckValue = e.target.value;
      v.mustContain.some((v) => e.target.value.includes(v)) &&
      e.target.value.length > 8
        ? (v.ispassed = true)
        : (v.ispassed = false);
    } else {
      inputList[1].pwCheckValue.match(`${e.target.value}`)
        ? (v.ispassed = true)
        : (v.ispassed = false);
    }
    inputList.forEach((v) => {
      let isAllPassed = e.target.ispassed;
      isAllPassed
        ? loginBtn.classList.add("allpassed")
        : loginBtn.classList.add("notpassed");
      isAllPassed
        ? loginBtn.classList.remove("notpassed")
        : loginBtn.classList.remove("allpassed");
    });
  });
});
// v.ispassed.every((v) => (ispassed = true))
//         ? loginBtn.classList.add("allpassed")
//         : loginBtn.classList.add("notpassed");
//       v.every((v) => (v.ispassed = true))
//         ? loginBtn.classList.remove("notpassed")
//         : loginBtn.classList.remove("allpassed");

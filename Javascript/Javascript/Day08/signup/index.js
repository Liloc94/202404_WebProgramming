// 이메일 형식 @네이버 , 다음, 지메일, 카카오
// 비밀번호 8글자 이상이고 특수문자 하나 이상 포함
// 비밀번호 확인 비밀번호와 똑같아야 함

// 위 조건 모두 만족시 로그인 버튼 활성화

const emailInput = document.querySelector(".emailInput");
const pwInput = document.querySelector(".pwInput");
const pwCheck = document.querySelector(".pwCheck");
const loginBtn = document.querySelector(".loginBtn");

const validEmailForm = ["@naver.com", "@daum.com", "@gmail.com", "@kakao.com"];
const specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-"];

let tempPwInput = "";
let emailPassed = false;
let pwInputPassed = false;
let pwCheckPassed = false;
let allPassed = false;

emailInput.addEventListener("input", (e) => {
  validEmailForm.some((v) => e.target.value.includes(v))
    ? (emailPassed = true)
    : (emailPassed = false);
  allPassed = emailPassed && pwInputPassed && pwCheckPassed;
  allPassed
    ? loginBtn.classList.add("allpassed")
    : loginBtn.classList.remove("allpassed");
  allPassed
    ? loginBtn.classList.remove("notpassed")
    : loginBtn.classList.add("notpassed");
});

pwInput.addEventListener("input", (e) => {
  specialChars.some((v) => e.target.value.includes(v))
    ? (pwInputPassed = true)
    : (pwInputPassed = false);
  e.target.value.length > 8 ? (pwInputPassed = true) : (pwInputPassed = false);
  tempPwInput = e.target.value;
  allPassed = emailPassed && pwInputPassed && pwCheckPassed;
  allPassed
    ? loginBtn.classList.add("allpassed")
    : loginBtn.classList.remove("allpassed");
  allPassed
    ? loginBtn.classList.remove("notpassed")
    : loginBtn.classList.add("notpassed");
});

pwCheck.addEventListener("input", (e) => {
  e.target.value === tempPwInput
    ? (pwCheckPassed = true)
    : (pwCheckPassed = false);

  allPassed = emailPassed && pwInputPassed && pwCheckPassed;
  allPassed
    ? loginBtn.classList.add("allpassed")
    : loginBtn.classList.remove("allpassed");
  allPassed
    ? loginBtn.classList.remove("notpassed")
    : loginBtn.classList.add("notpassed");
});

const optionsClassList = [
  {
    className: ".agreeFirst",
    isChecked: false,
    msg: "[필수] 서비스 이용약관 동의 ",
  },
  {
    className: ".agreeSecond",
    isChecked: false,
    msg: "[필수] 개인정보 수집 이용 동의서",
  },
  {
    className: ".agreeThird",
    isChecked: false,
    msg: "[선택] 마케팅 활용 동의",
  },
  {
    className: ".agreeFourth",
    isChecked: false,
    msg: "[선택] 광고성 정보 수신 동의",
  },
];

optionsClassList.forEach((v, i) => {
  const temp = document.createElement("div");
  temp.innerText = v.msg;
  temp.className = v.className;
  temp.classList.add(v.isChecked ? "checked" : "notChecked");

  temp.addEventListener("click", () => {
    temp.classList.toggle("checked");
    temp.classList.toggle("notChecked");
    optionsClassList[i].isChecked = temp.classList.contains("checked");

    const nextBtn = document.querySelector(".nextBtn");
    optionsClassList.every((v) => v.isChecked)
      ? nextBtn.classList.add("passed")
      : nextBtn.classList.remove("passed");
    // optionsClassList.forEach((v) =>
    //   v.isChecked ? (buttonPassed = true) : (buttonPassed = false)
    // );
  });
  const container = document.querySelector(".container");
  container.appendChild(temp);
});

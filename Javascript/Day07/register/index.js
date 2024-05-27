const btnArray = [".agreeFirst", ".agreeSecond", ".agreeThird", ".agreeFourth"];

btnArray.forEach((v) => {
  const temp = document.querySelector(v);
  temp.addEventListener("click", () => {
    temp.classList.toggle("notChecked");
    temp.classList.toggle(".checked");

    let buttonPass = true;
    btnArray.forEach((v) => {
      const temp = document.querySelector(v);
      if (temp.classList.contains("notChecked")) {
        buttonPass = false;
      } else {
        buttonPass = true;
      }
    });
    const confirmBtn = document.querySelector(".nextBtn");
    if (buttonPass) confirmBtn.classList.add("passed");
    else confirmBtn.classList.remove("passed");
  });
});

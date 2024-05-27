// 색깔 5개, 사이즈 5개 , 테두리 사이즈 3개
const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["small", "medium", "large", "x-large", "XX-large"];
const borderRadiList = ["borderRadi-0", "borderRadi-10", "borderRadi-20"];

colorList.forEach((v) => {
  const tempBtn = document.createElement("button");
  tempBtn.innerText = v;
  tempBtn.addEventListener("click", () => {
    const box = document.querySelector(".box");
    // 컬러 클래스가 누적되지 않도록 forEach를 사용해 모두 삭제
    colorList.forEach((v) => box.classList.remove(v));
    // 이후 원하는 색의 클래스만 추가
    box.classList.add(v);
  });
  const colorBtnListTag = document.querySelector(".colorBtnList");
  colorBtnListTag.appendChild(tempBtn);
});

sizeList.forEach((v) => {
  const tempBtn = document.createElement("button");
  tempBtn.innerText = v;
  tempBtn.addEventListener("click", () => {
    const box = document.querySelector(".box");
    sizeList.forEach((v) => box.classList.remove(v));
    box.classList.add(v);
  });
  const sizeBtnListTag = document.querySelector(".sizeBtnList");
  sizeBtnListTag.appendChild(tempBtn);
});

borderRadiList.forEach((v) => {
  const tempBtn = document.createElement("button");
  tempBtn.innerText = v;
  tempBtn.addEventListener("click", () => {
    const box = document.querySelector(".box");
    borderRadiList.forEach((v) => box.classList.remove(v));
    box.classList.add(v);
  });
  const radiBtnListTag = document.querySelector(".radiusBtnList");
  radiBtnListTag.appendChild(tempBtn);
});

const menus = [
  {
    menuName: "아메리카노",
    price: 3000,
  },
  {
    menuName: "라떼",
    price: 4000,
  },
  {
    menuName: "레몬에이드",
    price: 3500,
  },
  {
    menuName: "솔의눈",
    price: 2500,
  },
  {
    menuName: "카스",
    price: 4000,
  },
  {
    menuName: "바나나 우유",
    price: 2000,
  },
  {
    menuName: "사이다",
    price: 1500,
  },
  {
    menuName: "제로콜라",
    price: 2000,
  },
  {
    menuName: "데자와",
    price: 3000,
  },
  {
    menuName: "비타오백",
    price: 500,
  },
  {
    menuName: "요거트 스무디",
    price: 6000,
  },
  {
    menuName: "초코우유",
    price: 3000,
  },
  {
    menuName: "돌체라떼",
    price: 4000,
  },
  {
    menuName: "딸기라떼",
    price: 3500,
  },
  {
    menuName: "민트라떼",
    price: 5000,
  },
  {
    menuName: "비타천",
    price: 1000,
  },
  {
    menuName: "테라",
    price: 2500,
  },
];

// 오브젝트 요소에서 name value값을 h3태그로 만드는 함수
const makeName = (name) => {
  const h3 = document.createElement("h3");
  h3.innerText = name;
  return h3;
};

// 오브젝트 요소에서 price value값을 가져와 h5태그로 만드는 함수
const makePrice = (price) => {
  const h5 = document.createElement("h5");
  h5.innerText = price + "원";
  return h5;
};

// 오브젝트요소에서 price value값을 매개변수로 받고
// 클릭 이벤트를 할당키는 함수
const makeButtons = (price) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";
  btn.addEventListener("click", () => {
    const totalPrice = document.querySelector(".totalPrice");
    totalPrice.innerText = parseFloat(totalPrice.innerText) + price + "원";
    // 클릭 이벤트 내용은 document 의 총액을 보여주는 태그를 querySelector로 지정후
    // 해당 태그의 innerText에 매개변수로 받은 price value값을 더하는 기능
  });
  return btn;
};

// 오브젝트 자체를 매개변수로 받아온 뒤 위의 구현한 함수들을
// document에 부착하는 함수
const makeCoffee = (menus) => {
  const coffeeBox = document.createElement("div");
  coffeeBox.appendChild(makeName(menus.menuName));
  // 매개변수로 받은 오브젝트의 menuName을 다시 makeName함수의 매개변수로 사용
  coffeeBox.appendChild(makePrice(menus.price));
  // 위와 같이 오브젝트의 price value를 매개변수로 가져와 makePrice의 매개변수로 사용
  coffeeBox.appendChild(makeButtons(menus.price));
  // 위와 같이 오브젝트의 price value를 매개변수로 가져온 뒤 makeButtons의 매개변수로 사용
  document.querySelector(".menus").appendChild(coffeeBox);
  // document 에 존재하는 클래스가 .menus 인 div태그에
  // h3 + h5 + btn 태그가 들어있는 coffeeBox 변수를 부착
};

menus.forEach((v) => {
  makeCoffee(v);
});

const coffeeObj = {
  americano: {
    price: 2500,
    shot: 2,
  },
  latte: {
    price: 3000,
    shot: 3,
  },
  mint: {
    price: 3500,
    shot: 1,
  },
};

export const makeCoffee = (bean: String) => `${bean}으로 된 커피 완료!`;

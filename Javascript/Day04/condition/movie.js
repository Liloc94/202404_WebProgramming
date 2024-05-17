const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const ticketNum = document.querySelector(".ticketNum");
const totalPrice = document.querySelector(".totalPrice");

plusBtn.addEventListener("click", () => {
  ticketNum.innerText = Number(ticketNum.innerText) + 1;
  if(Number(ticketNum.innerText) >= 10){
    totalPrice.innerText = `${(Number(ticketNum.innerText) * 10000) * 0.8}원`;
  } else if(Number(ticketNum.innerText) >= 5){
    totalPrice.innerText = `${(Number(ticketNum.innerText) * 10000) * 0.9}원`;
  } else {
    totalPrice.innerText = `${Number(ticketNum.innerText) * 10000}원`;
  }
});

minusBtn.addEventListener("click", () => {
  if (Number(ticketNum.innerText) > 0) {
    ticketNum.innerText = Number(ticketNum.innerText) - 1;
  } else {
    Number(ticketNum.innerText) = 0;
  }

  if(Number(ticketNum.innerText) >= 10){
    totalPrice.innerText = `${(Number(ticketNum.innerText) * 10000) * 0.8}원`;
  } else if(Number(ticketNum.innerText) >= 5){
    totalPrice.innerText = `${(Number(ticketNum.innerText) * 10000) * 0.9}원`;
  } else {
    totalPrice.innerText = `${Number(ticketNum.innerText) * 10000}원`;
  }
});

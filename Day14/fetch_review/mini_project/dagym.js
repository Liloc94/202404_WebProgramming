import {
  finalRefine,
  searchFormAttach,
  spreadSearched,
} from "./refiningData.js";
import { spreadDatas } from "./refiningData.js";

const gymSection = document.querySelector(".gymList");

gymSection.insertAdjacentHTML("beforebegin", searchFormAttach());

finalRefine.map((v) => {
  gymSection.insertAdjacentHTML("beforeend", spreadDatas(v));
});

const searchBtn = document.querySelector(".searchBtn");
const searchBar = document.querySelector(".searchBar");
const startSearch = document.querySelector(".startSearchBtn");
let searchValue = "";

searchBtn.addEventListener("click", () => {
  searchBar.classList.toggle("erase");
  searchBtn.classList.add("erase");
  startSearch.classList.remove("erase");
});

searchBar.addEventListener("input", (e) => {
  searchValue = e.target.value;
  console.log(searchValue);
});

startSearch.addEventListener("click", () => {
  gymSection.innerHTML = ``;
  gymSection.insertAdjacentHTML(
    "beforeend",
    spreadSearched(searchValue, gymSection)
  );
});

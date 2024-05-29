import { finalRefine } from "./refiningData.js";
import { spreadDatas } from "./refiningData.js";

const gymSection = document.querySelector("gymList");

finalRefine.map((v) => {
  gymSection.insertAdjacentHTML("beforeend", spreadDatas(v));
});

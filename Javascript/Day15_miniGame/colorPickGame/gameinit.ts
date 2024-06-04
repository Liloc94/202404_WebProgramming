import { setGameFunctions } from "./functions/gameSetting.js";
import { v } from "./interface/interface.js";

document.addEventListener("DOMContentLoaded", function () {
  window.onload = function (): any {
    v.playerTime.innerHTML = v.leftTime;
    v.playerStage.innerHTML = v.stage;

    setGameFunctions.gameStart();
  };

  // 아이템 클릭 이벤트
  v.palette.addEventListener("click", function (e: any): any {
    if (e.target.className === "palette-Btn") {
      if (e.target.id === "target") {
        setGameFunctions.correctTarget();
        console.log("타겟클릭이벤트발생");
      } else {
        setGameFunctions.incorrectTarget();
        console.log("타겟클릭이벤트발생");
      }
    }
  });

  // 랜덤 색상 생성
  v.color = setGameFunctions.colorSet(v.color);

  // 아이템 크기, 색상 적용

  setGameFunctions.setPaletteStyle();

  v.resultMsg.addEventListener("click", function (e: any): any {
    if (e.target === v.resultMsg || e.target === v.resultMsgCloseButton) {
      v.resultMsg.classList.remove("show");
      v.resultMsg.classList.add("invisible");

      // 결과창 닫으면 화면 초기화 후 게임 재시작
      v.palette.innerHTML = "";
      v.playerTime.innerHTML = v.leftTime;
      v.playerStage.innerHTML = v.stage;

      setGameFunctions.gameStart();
    }
  });
});

import { initVariables } from "../initializer/initialize.js";
// 변수 destructuring 이후 함수나 기능들에서 사용되고 있는 이름에 맞게 이름변경
export let { stageNum: stage, paletteLength: paletteRow, paletteWidth: paletteSize, timeLeft: leftTime, playerTimer: timer, cTarget: answerTarget, cTargetOpa: answerOpacity, colorObj: color, sizeOfItem: itemSize, resultTag: resultMsgTitle, resultCloseBtn: resultMsgCloseButton, playerTimeLeft: playerTime, playerStageNum: playerStage, paletteTag: palette, paletteItemTag: paletteItem, resultMsgTag: resultMsg, } = initVariables;
export let v = {
    // : value명 같으므로 생략
    stage,
    paletteRow,
    paletteSize,
    leftTime,
    timer,
    answerTarget,
    answerOpacity,
    color,
    itemSize,
    resultMsgTitle,
    resultMsgCloseButton,
    playerTime,
    playerStage,
    palette,
    paletteItem,
    resultMsg,
};

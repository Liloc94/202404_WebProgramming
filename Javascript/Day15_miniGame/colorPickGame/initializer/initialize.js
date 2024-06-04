let stage = 1; // 스테이지 번호
let paletteRow = 2; // 색깔 칸 길이
let paletteSize = (paletteRow ** 2); // 2번클리어 마다 칸 길이 제곱
let leftTime = 15; // 남은 시간
let timer = 0; // 타이머
let answerTarget = 0; // 정답칸
let answerOpacity = 0.4; // 정답칸 투명도
let color = {}; // 임시저장용 색깔 오브젝트
// 아이템 크기 세팅
let itemSize = 100 / paletteRow;
// 결과창 닫기
let resultMsgTitle = document.getElementsByClassName("result__text-title")[0];
let resultMsgCloseButton = document.getElementsByClassName("result__text-close-button")[0];
// 기본 값 세팅 및 다른 색깔 찾기 게임 자동 시작
let playerTime = document.getElementById("player-time");
let playerStage = document.getElementById("player-stage");
// 팔레트 아이템 세팅
let palette = document.getElementsByClassName("palette")[0];
let paletteItem = document.getElementsByClassName("palette-Btn");
// 결과표시영역 변수초기화
let resultMsg = document.getElementsByClassName("result")[0];
export let initVariables = {
    stageNum: stage,
    paletteLength: paletteRow,
    paletteWidth: paletteSize,
    timeLeft: leftTime,
    playerTimer: timer,
    cTarget: answerTarget,
    cTargetOpa: answerOpacity,
    colorObj: color,
    sizeOfItem: itemSize,
    resultTag: resultMsgTitle,
    resultCloseBtn: resultMsgCloseButton,
    playerTimeLeft: playerTime,
    playerStageNum: playerStage,
    paletteTag: palette,
    paletteItemTag: paletteItem,
    resultMsgTag: resultMsg,
};

let stage = 1 as number; // 스테이지 번호
let paletteRow = 2 as number; // 색깔 칸 길이
let paletteSize = (paletteRow ** 2) as number; // 2번클리어 마다 칸 길이 제곱
let leftTime = 15 as number; // 남은 시간
let timer = 0 as number; // 타이머
let answerTarget = 0 as number; // 정답칸
let answerOpacity = 0.4 as number; // 정답칸 투명도

let color: any = {}; // 임시저장용 색깔 오브젝트

// 아이템 크기 세팅
let itemSize = 100 / paletteRow;

// 결과창 닫기
let resultMsgTitle = document.getElementsByClassName(
  "result__text-title"
)[0] as any;
let resultMsgCloseButton = document.getElementsByClassName(
  "result__text-close-button"
)[0] as any;

// 기본 값 세팅 및 다른 색깔 찾기 게임 자동 시작
let playerTime = document.getElementById("player-time") as any;
let playerStage = document.getElementById("player-stage") as any;

// 팔레트 아이템 세팅
let palette = document.getElementsByClassName("palette")[0] as any;
let paletteItem = document.getElementsByClassName("palette-Btn") as any;
// 결과표시영역 변수초기화
let resultMsg = document.getElementsByClassName("result")[0] as any;

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

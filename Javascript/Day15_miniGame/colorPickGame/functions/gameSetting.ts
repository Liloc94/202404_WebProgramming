import { v } from "../interface/interface.js";

export let setGameFunctions = {
  gameInit: initGame,
  makeAnswerTarget: createTargetItem,
  gameStart: startGame,
  colorSet: createColor,
  makeButtonItem: createPaletteItem,
  correctTarget: selectTargetItem,
  incorrectTarget: selectWrongItem,
  setButtonItem: setpaletteItem,
  updateGameInfo: updateSettings,
  gameResultPop: showGameResult,
  setPaletteStyle: setItemStyle,
  test: () => {
    console.log("test");
  },
};

// 초기 게임세팅
function initGame(): any {
  v.stage = 1;
  v.leftTime = 15;
  v.paletteRow = 2;
  v.paletteSize = v.paletteRow ** 2;
  v.answerTarget = 0;
  v.answerOpacity = 0.4;
  v.color = {};
}

function setItemStyle(): any {
  for (let i = 0; i < v.paletteItem.length; i++) {
    // 크기 적용
    v.paletteItem[i].style.width = `${v.itemSize}%`;
    v.paletteItem[i].style.height = `${v.itemSize}%`;

    // 색상 적용
    let opacity = 1;

    if (v.paletteItem[i].id === "target") {
      opacity = v.answerOpacity;
    }
    console.log(v.itemSize);
    v.paletteItem[
      i
    ].style.backgroundColor = `rgba(${v.color.red}, ${v.color.green}, ${v.color.blue}, ${opacity}`;
  }
}

// 정답블록 생성
function createTargetItem(paletteSize: number): any {
  return Math.floor(Math.random() * paletteSize);
}

// 게임 실행 함수
function startGame(): any {
  createPaletteItem();

  // 1초 마다 타이머 초기시간 leftTime(15초)에서 증감연산자로 마이너스시킨다.
  v.timer = setInterval(() => {
    v.playerTime.innerHTML = --v.leftTime;

    // 시간 초과
    if (v.leftTime <= 0) {
      v.playerTime.innerHTML = 0;

      // 타이머 종료
      clearInterval(v.timer);

      // 결과 출력
      showGameResult();

      // 게임 초기값으로 세팅
      initGame();
    }
  }, 1000);
}

// 랜덤 색상 설정
function createColor(color: any): any {
  // 랜덤 색깔 설정 함수
  color.red = Math.floor(Math.random() * 101) + 100;
  color.green = Math.floor(Math.random() * 101) + 100;
  color.blue = Math.floor(Math.random() * 101) + 100;
  return color;
}

// 팔레트 아이템 생성
function createPaletteItem(): any {
  // 랜덤으로 타겟 아이템 생성
  v.answerTarget = createTargetItem(v.paletteSize);
  // 팔레트 아이템 세팅
  setpaletteItem();
}

// 정답 처리
function selectTargetItem(): any {
  updateSettings();
  createPaletteItem();
}

// 오답 처리
function selectWrongItem(): any {
  // 3초를 뺀 값이 0보다 작은 경우에도 0으로 고정
  if (v.leftTime - 3 < 0) {
    v.leftTime = 0;
  } else {
    v.leftTime = v.leftTime - 3;
  }

  // 오답 선택 시 애니메이션
  v.palette.classList.add("vibration"); // 바이브레이션 css 추가

  setTimeout(function () {
    v.palette.classList.remove("vibration"); // 오답 애니메이션 0.5 초뒤 제거
  }, 500);

  // 화면 갱신
  v.playerTime.innerHTML = v.leftTime;
}

// 팔레트 태그 추가 함수
function setpaletteItem(): any {
  for (let i = 0; i < v.paletteSize; i++) {
    if (i === v.answerTarget) {
      v.palette.innerHTML =
        v.palette.innerHTML +
        `
      <div class="palette-Btn" id="target"></div>
      `;
    } else {
      v.palette.innerHTML =
        v.palette.innerHTML +
        `
      <div class="palette-Btn"></div>
      `;
    }
  }
}

// 사용자가 정답을 맞춘 경우 설정 값 변경
function updateSettings(): any {
  // 화면 초기화
  v.palette.innerHTML = "";

  // targetIndex, color는 팔레트 아이템 생성 시 랜덤 값으로 재생성되기 때문에 따로 리셋 처리 하지 않음
  v.stage++;
  v.leftTime = 15;

  // stage가 2씩 올라갈 때마다 팔레트 사이즈 증가
  if (v.stage % 2 === 1) {
    v.paletteRow++; // 팔레트 열 추가
    v.paletteSize = v.paletteRow ** 2; // 증가된 팔레트열 제곱후 팔레트사이즈에 대입
  }

  // opacity 값 0.02씩 증가 (opacity = 1 되기 전까지로 설정)
  if (v.answerOpacity <= 0.92) {
    // 실수 계산 시 오차발생, 반올림하도록 처리 toFixed()
    v.answerOpacity = +(v.answerOpacity + 0.02).toFixed(2);
  }

  // 타이머, 스테이지 번호 갱신
  v.playerTime.innerHTML = v.leftTime;
  v.playerStage.innerHTML = v.stage;
}

// 게임 종료 문구
function showGameResult(): any {
  let resultText = "";

  if (v.stage > 0 && v.stage <= 5) {
    resultText = "눈에 문제 있는듯!";
  } else if (v.stage > 5 && v.stage <= 10) {
    resultText = "리트 ㄱㄱ?";
  } else if (v.stage > 10 && v.stage <= 15) {
    resultText = "색깔 찾기 쫌 치네 ~";
  } else if (v.stage > 15 && v.stage <= 20) {
    resultText = "최소 몽골족";
  } else if (v.stage > 20 && v.stage <= 25) {
    resultText = "인간 채도판별기<br/>지렸다~!";
  } else if (v.stage > 26 && v.stage <= 30) {
    resultText = "이게 절대색감인가<br/>뭔가 그거냐?";
  } else if (v.stage > 30) {
    resultText = "이건 콘솔 안보고 절대 못깸.. 콘솔봤지??";
  }

  v.resultMsgTitle.innerHTML = `
  <h1 class="result__text-title--result color-red">
  게임 종료!
  </h1>
  <span class="result__text-title--stage">
  기록 : <strong>STAGE ${v.stage}</strong>
  </span>
  <p class="result__text-title--desc">
  ${resultText}
  </p>
  `;

  v.resultMsg.classList.add("show");
  v.resultMsg.classList.remove("invisible");
}

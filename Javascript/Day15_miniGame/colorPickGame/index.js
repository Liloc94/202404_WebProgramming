"use strict";
let stage = 1; // 스테이지 번호
let paletteRow = 2; // 색깔 칸 길이
let paletteSize = paletteRow ** 2; // 2번클리어 마다 칸 길이 제곱
let isPlaying = false; // 플레이 상태
let leftTime = 15; // 남은 시간
let timer = 0; // 타이머
let answerTarget = 0; // 정답칸
let answerOpacity = 0.4; // 정답칸 투명도
let color = {}; // 임시저장용 색깔 오브젝트
// 타이머, 팔레트, 스테이지번호 변수초기화
let paletteContainer = document.querySelector(".gridBlock");
let playerTime = document.querySelector(".playerTime");
let stageNum = document.querySelector(".stageNum");
let resultMsgTag = document.querySelector(".resultMsg");
// 게임실행 초기값
function initGame() {
    stage = 1;
    leftTime = 15;
    paletteRow = 2;
    paletteSize = paletteRow ** 2;
    answerTarget = 0;
    answerOpacity = 0.4;
    color = {};
}
// 팔레트 아이템 생성
function createPlatteItem() {
    // 랜덤으로 타겟 아이템 생성
    answerTarget = createTargetItem(paletteSize);
    // 팔레트 아이템 세팅
    settingPlatteItem();
}
// function startGame() {
// 게임 실행
//   makePalette();
//   timer = setInterval(() => {
//       playerTime.innerHTML = --time;
//       // 시간 초과
//       if (time <= 0) {
//           playerTime.innerHTML = 0;
//           // 타이머 종료
//           clearInterval(timer);
//           // 결과 출력
//           showGameResult();
//           // 게임 초기값으로 세팅
//           initGame();
//       }
//   }, 1000);
// }
function createColor(color) {
    // 랜덤 색깔 설정 함수
    color.red = Math.floor(Math.random() * 101) + 100;
    color.green = Math.floor(Math.random() * 101) + 100;
    color.blue = Math.floor(Math.random() * 101) + 100;
    return color;
}
// 팔레트 아이템 세팅
const palette = document.getElementsByClassName("gridBlock")[0];
const paletteItem = document.getElementsByClassName("palette-Btn");
// 타겟 생성
function createTargetItem(paletteSize) {
    return Math.floor(Math.random() * paletteSize);
}
// 팔레트 태그 추가 함수
function settingPlatteItem() {
    for (let i = 0; i < paletteSize; i++) {
        i === answerTarget
            ? (paletteContainer.innerHTML += `
              <div class="palette-Btn" id="target"></div>
          `)
            : (paletteContainer.innerHTML += `
              <div class="palette-Btn"></div>
          `);
    }
    // 아이템 크기 세팅
    let itemSize = 100 / paletteRow;
    // 랜덤 색상 생성
    color = createColor(color);
    // 아이템 크기, 색상 적용
    for (let i = 0; i < paletteItem.length; i++) {
        // 크기 적용
        paletteItem[i].style.width = `${itemSize}%`;
        paletteItem[i].style.height = `${itemSize}%`;
        // 색상 적용
        let opacity = 1;
        if (paletteItem[i].id === "target") {
            opacity = answerOpacity;
        }
        paletteItem[i].style.backgroundColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity}`;
    }
}
// 사용자가 정답을 맞춘 경우 설정 값 변경
function updateSettings() {
    // 화면 초기화
    palette.innerHTML = "";
    // targetIndex, color는 팔레트 아이템 생성 시 랜덤 값으로 재생성되기 때문에 따로 리셋 처리 하지 않음
    stage++;
    playerTime = 15;
    // stage가 2씩 올라갈 때마다 팔레트 사이즈 증가
    if (stage % 2 === 1) {
        paletteRow++; // 팔레트 열 추가
        paletteSize = paletteRow ** 2; // 증가된 팔레트열 제곱후 팔레트사이즈에 대입
    }
    // opacity 값 0.02씩 증가 (opacity = 1 되기 전까지로 설정)
    if (answerOpacity <= 0.92) {
        // 실수 계산 시 오차발생, 반올림하도록 처리 toFixed()
        answerOpacity = +(answerOpacity + 0.02).toFixed(2);
    }
    // 타이머, 스테이지 번호 갱신
    playerTime.innerHTML = leftTime;
    stageNum.innerHTML = stage;
}
// 오답 처리
function selectWrongItem() {
    // 3초를 뺀 값이 0보다 작은 경우에도 0으로 고정
    if (playerTime - 3 < 0) {
        playerTime = 0;
    }
    else {
        playerTime -= 3;
    }
    // 오답 선택 시 애니메이션
    palette.classList.add("vibration"); // 바이브레이션 css 추가
    setTimeout(function () {
        palette.classList.remove("vibration"); // 오답 애니메이션 0.4 초뒤 제거
    }, 400);
    // 화면 갱신
    playerTime.innerHTML = playerTime;
}
// 게임 종료 문구
function showGameResult() {
    let resultText = "";
    if (stage > 0 && stage <= 5) {
        resultText = "눈에 문제 있는듯!";
    }
    else if (stage > 5 && stage <= 10) {
        resultText = "리트 ㄱㄱ?";
    }
    else if (stage > 10 && stage <= 15) {
        resultText = "색깔 찾기 쫌 치네 ~";
    }
    else if (stage > 15 && stage <= 20) {
        resultText = "최소 몽골족";
    }
    else if (stage > 20 && stage <= 25) {
        resultText = "인간 채도판별기<br/>지렸다~!";
    }
    else if (stage > 26 && stage <= 30) {
        resultText = "이게 절대색감인가<br/>뭔가 그거냐?";
    }
    else if (stage > 30) {
        resultText = "이건 콘솔 안보고 절대 못깸.. 콘솔봤지??";
    }
    resultMsgTag.innerHTML = `
  <h1 class="modal__content-title--result color-red">
      게임 종료!
  </h1>
  <span class="modal__content-title--stage">
      기록 : <strong>STAGE ${stage}</strong>
  </span>
  <p class="modal__content-title--desc">
      ${resultText}
  </p>
  `;
    resultMsgTag.classList.add("show");
}

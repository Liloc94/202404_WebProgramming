interface Student {
  studentName: String;
  university: String;
  major: String;
}

class Student {
  // Attribute / Noun 명사
  // Action, Function / Verb 동사

  // 변수 : 대학, 전공, 학년, 학점, 입학년도, 학번
  constructor(a: String, b: String) {
    this.studentName = a;
    this.university = "연세대학교";
    // 정의한 class에서 생성할 각 객체들의 공통 분모는 매개변수를 받지않고 default 값을 설정하여
    // 일괄적용하는 것이 유지보수성 측면에서 권장된다.
    this.major = b;
  }
  intro() {
    console.log(
      `저는 ${this.studentName} 이고, ${this.university}에 재학 중이며, ${this.major}(이)가 제 전공과입니다.`
    );
  }

  // 함수 : 술마시기, 졸업작품 만들기, 논문 쓰기, 수강하기
  drinking(x: String) {
    console.log(`${x}를 마신다!!`);
  }
  makeMasterPiece() {
    console.log("졸작 만든다!!");
  }
}

const kim: Student = new Student("김민재", "컴퓨터공학과");
const lee: Student = new Student("이지민", "정치외교학과");
console.log(kim);
console.log(lee);

kim.intro();
kim.drinking("테라");
lee.intro();
lee.drinking("카스");

// class DogInsurance {
// 수술이력, 나이, 성별, 품종, 밥먹는 상태...
// 수술날짜등록하기, 보험이력등록하기, 가입하기...
// }

// class DogRpg {
// hp , stress수치, 스피드, 개인기
// 놀아주기, 옷입히기, 밥먹이기, 하트주기
// }

interface HardButton {
  backgroundColor: String;
  content: String;
}

// class 사용 예제
class HardButton {
  constructor(a: String, b: String) {
    this.backgroundColor = a;
    this.content = b;
  }
  render() {
    const newDiv = document.createElement("div");
    newDiv.style.height = "60px";
    newDiv.style.width = "190px";
    newDiv.style.padding = "10px 20px";
    newDiv.style.backgroundColor = `${this.backgroundColor}`;
    newDiv.innerText = `${this.content}`;

    document.querySelector(".test")?.appendChild(newDiv);
  }
}

const btn1 = new HardButton("#3498db", "레스토랑");
const btn2 = new HardButton("#34495e", "메가커피");
const btn3 = new HardButton("#e67e22", "새마을식당");

btn1.render();
btn2.render();
btn3.render();
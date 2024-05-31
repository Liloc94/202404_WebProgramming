"use strict";
// 클라이언트[프론트엔드] <-> 서버[백엔드]
// http 방식으로 데이터를 주고 받음
// 1. stateLess [ request // response ]
// 2. 쿠키, 세션, JWT[]
//  -1. 웹 브라우저 접속
//  -2. 로그인 진행 [쿠키 , 세션 , JWT 중 택 1 반환]
//  -3. 이후 웹 사용 시 로그인 실행 후 반환받은 쿠키,세션,JWT 중 하나를 통해 유저객체검증
// 3. restful API
//    ./webtoon/list/monday/id=1234
//    ./netflix/best/id=293829

// const data3 = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// data.then((v) => v.json()).then((v) => console.log(v));

// const data1 = fetch("https://fakerapi.it/api/v1/companies?_quantity=20");
// data1.then((v) => v.json()).then((v) => console.log(v));

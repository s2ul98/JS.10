// Date 객체
// 날짜와 시간을 다루는 객체

// 시스템 현재 시간 가져오기
const now = new Date(); // 현재 날짜와 시간
console.log(now); // 2023-10-05T07:23:45.123Z (UTC 기준)

// 특정날짜와 시간 만들기
// 연도/월/일 시:분:초 밀리초
const day = new Date(2025, 1, 1, 10, 10, 10, 0);
console.log(day); // 2025-02-01T01:10:10.000Z (UTC 기준)

// 타임존 적용
console.log(now.toLocaleString()); 

// 일 변경
now.setDate(10);
console.log(now); 

// 시간 변경
now.setHours(20);
console.log(now.toLocale);

// 시간을 밀리세컨드 단위로 출력
console.log(Date.now());

// 날짜에서 연도, 월, 일 꺼내기
const year = now.getFullYear();
const month = now.getMonth() + 1; // 0부터 시작하므로 +1
const date = now.getDate();
console.log(year);
console.log(month);
console.log(date);

// 요일 꺼내기
const day1 = now.getDay();

// 날짜에서 시, 분, 초 꺼내기
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
const ms = now.getMilliseconds();
console.log(hours);
console.log(min);
console.log(sec);
console.log(ms);

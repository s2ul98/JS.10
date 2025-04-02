// 날짜를 특정패턴으로 출력하기
const now = new Date(); // 현재 날짜와 시간

// 2025-4-2
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
console.log(year,'-', month, '-', date);

// 15:44:00
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
const time = hour + ':' + min + ':' + sec;
console.log(time);

// 날짜 계산
// 오늘부터 10일 후의 날짜 구하기
const curDate = now.getDate();
now.setDate(curDate + 10);

// 시간에 타임존을 적용
console.log(now.toLocaleString()); 
// 모든 자리수를 더해서 합계 구하기

const str = '0123'; // 문자열
// 합계를 저장할 변수
let sum = 0;
// 0 + 1 + 2 + 3 = 6
// for (const i = 1; i <=6; i++) {
//     sum += parseInt(str[sum]); 
// }
// console.log(sum); // 6 (합계)

for(const ch of str) {
  console.log(ch, typeof ch); // 0 string, 1 string, 2 string, 3 string
  const num = parseInt(ch); // 문자열을 숫자로 변환
  console.log(num, typeof num); // 0 number, 1 number, 2 number, 3 number
  sum = sum + num; // 합계
}
console.log(sum); // 6 (합계)

const str2 = '0123'; // 문자열
let sum2 = 0; // 합계를 저장할 변수

// 일반 for문
// 초기화 조건 증감
// => 반복횟수를 만들기 위한 코드
// 반복횟수를 결정할때 시작값이 꼭 1이될 필요는 없음
// 조건을 0으로 초기화하는 이유 : 배열의 index로 재활용할 때
for(let a = 5; a < 10; a++) { // 5부터 9까지 반복 (5회)
  console.log('안녕');
}

// a의 용도
// 1. 반복횟수
// 2. index
for(let a = 0; a < 4; a++) { // 0부터 3까지 반복 (4회)
  // 문자열의 문자를 하나씩 추출
  // 문자열을 배열처럼 인덱스를 사용할 수 있음
  // console.log(str.charAt(a), typeof str.charAt(a)); // 0, 1, 2, 3 (문자열의 문자)
  let num = parseInt(str.charAt(a));
  console.log(num, typeof num);
  // 합계에 각 자리수를 누적
  sum = sum + num; // 0 + 1 + 2 + 3 = 6
}
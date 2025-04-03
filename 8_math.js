// Math 객체 : 산술, 삼각함수 등 다양한 수학 기능 제공

// 반올림
console.log(Math.round(4.9)); // 5
console.log(Math.round(4.4)); // 4

// 무조건 올림
console.log(Math.ceil(4.1)); // 5

// 무조건 내림
console.log(Math.floor(4.4)); // 4

// 제곱
console.log(Math.pow(8, 2)); // 64 (8의 2제곱)

// 제곱근
console.log(Math.sqrt(64)); // 8 (64의 제곱근)

// 절대값
console.log(Math.abs(-4.5)); // 4.5 (절대값)
console.log(Math.abs(4.5)); // 4.5 (절대값)

// 숫자 목록 중에서 가장 작은 값 찾기
console.log(Math.min(0, 150, 30, 5, 10)); // 0 (가장 작은 값)

// 숫자 목록 중에서 가장 큰 값 찾기
console.log(Math.max(0, 150, 30, 5, 10)); // 150 (가장 큰 값)

// 주사위 굴리기
// 랜덤 함수는 그대로 사용하는 경우가 별로 없고 

let num = Math.random();
console.log(num); 
console.log(num * 10)
// 값의 범위 : 0~9
console.log(Math.floor(num * 10));
// 값의 범위 : 1~10
console.log(Math.floor(num * 10) + 1); // 1~10 사이의 랜덤 숫자 생성
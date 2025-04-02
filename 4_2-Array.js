// 배열 정렬하기
// sort 함수는 원본데이터를 변경한다
const fruits = ['banana', 'orange', 'apple', 'mango'];

// 배열을 역순으로 정렬
// 알파벳 역순 x. 원본 데이터에서 역순으로 정렬
fruits.sort();
console.log(fruits);

// 정렬 순서를 직접 정의하기
// 배열의 요소가 영어일 때는 알파벳 순서로 정렬됨
// 배열의 요소가 숫자일 때는 기준이 명확하지 않음 (정렬 기준을 직접 정의해야 함)
// 배열의 요소가 한글일 때는 가나다 순서로 정렬됨
const arr = [40, 100, 1, 5];
// sort 함수의 인자는 함수
// 첫번째 매개 변수: a
// 두번째 매개 변수: d (a와 b의 차이값)
// a가 b보다 작으면 음수, 같으면 0, a가 b보다 크면 양수 반환
arr.sort(function(a,d) {
  return a - d;
});
// return a - d; 정렬
// 리턴값이 음수라면 그대로 유지
// 리턴값이 양수라면 자리 교체 => 앞에 있는 값이 더 크면 교체
// a : 40, d : 100 => -60
// a : 100, d : 1 => 99
// a : 1, d : 5 => -4 => a : 100, b : 5 => 95
// a : 5, d : 40 => -35
// sort 함수는 순회를 1번만 하지 않고, 정렬이 끝날때까지 반복

// return d - a;
// 리턴값이 양수라면 자리 교체 => 뒤에 있는 값이 더 크면 교체
// a : 40, d : 100 => 60

console.log(arr); // [1, 100, 40, 5] (문자열로 정렬됨)

// 객체 목록 정렬하기
const personList = [
  {name: '유재석', age: 55},
  {name: '하하', age: 48},
  {name: '김종국', age: 50},
  {name: '양세찬', age: 35},
];
// 사람의 나이를 기준으로 정렬
arr.sort(function(a,b) {
  return b.age - a.age;
});

console.log(personList);

const arr1 = [1,2,3,4,5,6,7,8,9,10];

// filter: 조건을 만족하지 않는 요소는 제거하고 조건을 만족하는 요소만 모아서 새로운 배열을 생성
// arr.filter(function(num) {
//   return value > 5;
// };

const newArr = arr1.filter(function(value) {
  return num > 5;
});
console.log(newArr); // [6, 7, 8, 9, 10]

// 객체 배열을 사용해서 필터링 하기
const studentList = [
  {name: '유재석', point: 55},
  {name: '하하', point: 48},
  {name: '김종국', point: 50},
  {name: '양세찬', point: 35},
  {name: '이상민', point: 70},
  {name: '이효리', point: 80},
];

// 학생의 점수가 70점 이상인 학생만 필터링
// 함수의 매개변수 : value, index, array
// 함수의 리턴값 : boolean

// const passList = studentList.filter(function(student) {
//   return student.point >= 70;
// });
// console.log(passList)

// const passList = studentList.filter((student).point <= 70)
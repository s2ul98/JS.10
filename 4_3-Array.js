// 배열 안에 요소를 변경하여 새로운 배열 생성
// sort : 정렬
// filter : 필터링(제거)
// map : 내용을 새롭게 교체(변경)

const arr = [1,2,3,4,5];

// 배열요소의 값을 2배로 수정
// 함수의 매개변수
// 함수의 리턴값: 새로운 값
const newArr = arr.map(function(value) {
  return value * 2; // 2배로 수정
});

console.log(newArr);

// 객체배열을 사용해서 내용 변경하기
const personList = [
  {firstName: '재석', lastName: '유'},
  {firstName: '하', lastName: '하'},
  {firstName: '종국', lastName: '김'},
];

// 성과 이름을 조합하여 풀네임 속성 만들기
// 풀네임 속성을 object에 추가
const newList = personList.map(person=>{
  return{
    firstName: person.firstName,
    lastName: person.lastName,
    fullName: person.firstName + person.lastName, 
  };
});
console.log(newList);
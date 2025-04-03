// Set : 자료구조. 대량의 데이터를 저장할 때 사용
// 특징 : 데이터 중복 불가

// 생성자 : Set()
const set = new Set();

// 데이터 추가 : add()
set.add(1); // 1 추가
set.add(2); // 2 추가
set.add(3); // 3 추가

console.log(set);

// set의 크기
const size = set.size;
console.log(size);

// 데이터 삭제 : delete()
// 삭제시 삭제할 value 입력
set.delete(2); // 2 삭제
console.log(set);

// set 안에 특정 값이 있는지 확인
const result = set.has(1);
console.log(result);

const result2 = set.has(2);
console.log(result2);

// set 안에 있는 값을 모두 꺼내기
// index가 없을땐?

// for문 사용
for(let value of set){
  console.log(value);
}

// forEach : set 안에 요소를 하나씩 꺼내면서 반복적인 작업
// forEach 함수의 인자는 method
set.forEach((vlaue) => {
  console.log(vlaue);
});

// set 안에 저장된 모든 값을 삭제
set.clear();
console.log(set);
// Map : 자료구조. 데이터를 대량으로 저장할 때 사용
// 특징 : key-value 쌍 형태로 저장
// 식별자로 index 대신 key 사용

// map 생성
const map = new Map();

// map에 데이터 추가 : set()
map.set('name', '둘리');
map.set('email', 'abc@gmail.com');
map.set('phone', '010-1234-5678');

console.log(map);

// 데이터 수정
// set안에 key값이 존재한다면 데이터 수정
// 존재하지 않는다면 데이터 추가
map.set('phone', '010-9876-5432');

console.log(map);

// 데이터 조회
const value = map.get('name');
console.log(value);

// map의 크기 확인
const size = map.size;
console.log(size);

// map 안에 특정 데이터가 있는지 확인
const result = map.has('name');
console.log(result);

// 데이터 삭제
map.delete('name');
console.log(map);

// 새로운 데이터 추가
map.set('name', '마이콜');
console.log(map);

// 같은 키 값이 있으면 데이터가 교체됨
// map은 key 중복 불가 / value 중복 가능

// map에 저장된 데이터 하나씩 꺼내기

// for-of문 사용
for(const [key, vlaue]of map) {
  console.log(key, value);
}

for(const m of map) {
  console.log(m);
}

// forEach 사용
map.forEach((a, b) => {
  console.log(a, b);
});

// map안에 있는 모든 데이터를 일괄 삭제
map.clear();
console.log(map);
let fruits = ["apple", "banana", "orange"];

const result = fruits.unshift('remon') // 배열의 맨 앞에 요소 추가
console.log(result, typeof result);
console.log(fruits); // ["remon", "apple", "banana", "orange"]
fruits.unshift('kiwi', 'melon') // 배열의 맨 앞에 여러 요소 추가
console.log(fruits); // ["kiwi", "melon", "remon", "apple", "banana", "orange"]

// 배열의 안에 있는 요소 교체
// 배열의 인덱스 사용
// index: 0~3
fruits[0] = 'kiwi'
console.log(fruits); // ["kiwi", "melon", "remon", "apple", "banana", "orange"]

// 배열의 특정 위치에 새로운 요소를 추가하거나 삭제
// 시작 위치, 삭제할 요소의 개수, 새롭게 추가할 데이터
fruits.splice(0,1,'딸기');
console.log(fruits); // ["딸기", "melon", "remon", "apple", "banana", "orange"]

// 배열의 일부를 삭제
// const result = fruits.splice(3); 

// 배열요소를 하나씩 꺼내면서 반복적인 작업하기
// 반복문과 비슷
// fruits.forEach(function(value, index)) {
//   const num = index.toString().padStart(3.0);
//   console.log(num, '번째 야채',value);
// }

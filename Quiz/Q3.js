
const arr = [1, "aa", true, "5", 10];
let sum = 0;

// boolean은 숫자로 변환할 수 있음
let result = !isNaN(true);
console.log(result); // true (boolean -> number)

console.log(1)

for(let num of arr) {
  const type = typeof num;
  if(type == 'number') {
    sum = sum + num;
  } else if (type == 'string' && !isNaN(num)) {
    sum = sum + parseInt(num);
  } else if (type == 'boolean') {
    sum = sum + num;
  }
}
console.log(sum); // 17(합계)
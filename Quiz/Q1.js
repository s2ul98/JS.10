const str = "aaabbc"; // 주어진 문자열
const target = "a";   // 세고 싶은 문자
let count = 0;        // 반복 횟수

for (let char of str) {
  if (char === target) {
    count++;
  }
}

console.log(`${target}의 개수: ${count}`);
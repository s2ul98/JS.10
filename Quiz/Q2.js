// 금지어 목록
const forbiddenWords = ["나쁜", "더러운"];
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아.";

for (let word of forbiddenWords) {
  // 금지어를 "XX"로 대체
  //repeat: x의 길이를 유동적으로 변경
  message = message.replace(word, "X".repeat(word.length)); 
}

console.log(message);
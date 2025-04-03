const students = new Map();

students.set("김민준", { grade: "2학년", major: "컴퓨터공학" });
students.set("이서윤", { grade: "3학년", major: "경영학" });
students.set("박지호", { grade: "1학년", major: "물리학" });
students.set("최지민", { grade: "4학년", major: "화학" });
students.set("정예린", { grade: "2학년", major: "수학" });
students.set("한지우", { grade: "3학년", major: "영어영문학" });

console.log("학생 목록:");
for (let [name, info] of students) {
  console.log(`${name}: ${info.grade}, ${info.major}`);
}
console.log();

for (let [name, info] of students) {
  if (info.grade === "3학년") {
    students.set(name, { grade: info.grade, major: "융합공학" });
  }
}
console.log("3학년 학생들의 전공을 융합공학으로 변경했습니다.");
console.log();


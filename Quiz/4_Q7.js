const students = [
  { name: "김철수", score: 85, gradeLevel: "1학년" },
  { name: "이영희", score: 92, gradeLevel: "2학년" },
  { name: "박지훈", score: 76, gradeLevel: "3학년" },
  { name: "최유리", score: 88, gradeLevel: "1학년" },
  { name: "정민호", score: 54, gradeLevel: "1학년" },
  { name: "한서연", score: 63, gradeLevel: "2학년" },
  { name: "장동건", score: 71, gradeLevel: "3학년" },
  { name: "오지호", score: 80, gradeLevel: "3학년" },
];

const studentsWithGrades = students.map((student) => {
  let grade;
  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 70) {
    grade = "B";
  } else {
    grade = "C";
} 
return {
  name: student.name,
  score: student.score,
  gradeLevel: student.gradeLevel,
  grade: grade,
};
});
console.log("등급이 추가된 학생 목록:", studentsWithGrades);


students.map((obj)=>{
  if(obj.score >= 90){
    obj.level = 'A';
  } else if (obj.score >= 70){
    obj.level = 'B';
  } else {
    obj.level = 'C';
  }
  return obj;
});

mapList.filter((obj)=>{
  console.log(obj.level == '1학년' && obj.level == 'B');
});
console.log
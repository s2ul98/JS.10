const visits = [
  {name: '김철수', date: '2024-08-20', purpose: '회의'},
  {name: '이영희', date: '2024-08-18', purpose: '상담'},
  {name: '박지훈', date: '2024-08-21', purpose: '회의'},
  {name: '최유리', date: '2024-08-19', purpose: '교육'},
  {name: '정민호', date: '2024-08-17', purpose: '상담'},
];

visits.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log("정렬된 방문 기록:", visits);

const filteredVisits = visits.filter((visit) => visit.purpose === "회의");
console.log("회의 목적의 방문 기록:", filteredVisits);

const formattedVisits = filteredVisits.map((visit) => {
  const dateObj = new Date(visit.date); // Date 객체로 변환

  return {
    name: visit.name,
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
    purpose: visit.purpose,
  };
});
console.log("형식이 변환된 방문 기록:", formattedVisits);


filter
const visitDates = new Date(Object.date);
return {
  name: Object.name,
  purpose: Object.purpose,
}

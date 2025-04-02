// 상품관리 프로그램 구현

// 상품 목록
const products = [
  {name: "스마트폰", price: 799000, category: "전자기기"},
  {name: "노트북", price: 1200000, category: "전자기기"},
  {name: "헤드폰", price: 150000, category: "액세사리"},
  {name: "키보드", price: 100000, category: "액세사리"},
  {name: "마우스", price: 50000, category: "액세사리"},
  {name: "충전기", price: 30000, category: "액세사리"},
  {name: "블루투스 스피커", price: 90000, category: "전자기기"},
];

// 상품의 가격을 기준으로 오름차순 정렬
// 오름차순 : 작은 -> 큰

// 함수의 매개변수: 배열의 인접한 두 요소
// 함수의 리턴값: 숫자
// sort함수의 규칙 : 양수가 반환되면 위치를 교체
products.sort((a, b)=> {
  console.log('a', a); 
  console.log('b', b);
  return a.price - b.price; 
});
console.log(products);

// 가격이 5~50만원 사이, 카테고리가 전자기기인 상품만 필터링
// 1. price가 5~50만원 사이인지 확인
// 2. 카테고리가 전자기기인지 확인

// 함수의 매개변수 : value, index, array
// 함수의 리턴값 : boolean
// 결과가 true면 요소를 유지, false면 요소를 제거
const result= products.filter((obj) => {
  const bool = obj.price <= 500000;
  console.log("이 상품의 가격"+bool);
  console.log(obj.price >= 50000 && obj.price <= 500000 && obj.category == "전자기기");
  return Obj.price >= 50000 && Obj.price <= 500000 && Obj.category == "전자기기";
});

// 상품 가격에 형식 표시 하기

// sort : 정렬
// filter : 필터링(제거)
// map : 내용을 새롭게 교체(변경)
// reduce : 누적값 계산

products.map(()=>{
  obj.price = obj.price + "원";
  return obj;
});


// const newArr = products.map((obj) => {
//   obj.price= = ${obj.price}원;
// // substring: slice처럼 문자열을 자르는 함수
// console.log(fruit.substring(9, 11)); 
// // 시작위치와 마지막 위치가 반대로 되어 있으면 자동으로 교체
// console.log(fruit.substring(11, 9));

// // replace: 특정 문자열을 교체하는 함수
// // 대상, 새로운 문자열
// console.log(fruit.replace("banana", "apple"));

let hello = "hello world!";

console.log(hello.toLowerCase()); // 소문자 변환 (hello world!)
console.log(hello.toUpperCase()); // 대문자 변환 (HELLO WORLD!)

let string1 = 'hello';
let string2 = 'world!';
let newSrt = string1.concat(string2); // 문자열 합치기
console.log(newSrt); // helloworld!

// string 값으로 string객체의 함수를 사용
// trim: 문자열의 앞뒤 공백을 제거하는 함수
// hello world! -> hello world! (중간에 있는 공백 제거불가)
console.log("     hello world!     ".trim()); // 공백 제거 (hello world!)

// pad~() : 자리수를 채우는 함수
// (자리수, 자리를 채울 문자)
let number = '5'; 
console.log(number.padStart(4, 0)); // 5 -> 0005 (앞에 0 추가)
console.log(number.padEnd(4, 0)); // 5 -> 5000 (뒤에 0 추가)

// charAt : 특정 위치의 문자를 가져오는 함수
// hello world! -> h (0번째 위치의 문자)
console.log("hello world".charAt(0)); // h
console.log("hello world".charAt(3)); // l

let birthday = "1998-09-24";

// split: 특정 문자를 기준으로 문자열을 나누는 함수
// - -> 구분자 (문자열을 배열로 변환)
console.log(birthday.split("-")); // ["1998", "09", "24"]

let url = 'https://www.naver.com/';

if(url.startsWith("http://")) { // url이 http로 시작하는지 확인
    console.log("올바른 형식의 사이트 주소입니다."); 

} else {
    console.log("올바른 형식의 사이트 주소가 아닙니다."); 
}

let fileName = 'abc.pdf';

if(fileName.endsWith(".pdf")) { // fileName이 pdf로 끝나는지 확인
    console.log("pdf 파일입니다."); 
} else{
    console.log("pdf 파일이 아닙니다."); 
}

let str4 = "hello";

console.log(str4[0]); // h
console.log(str4[1]); // e
console.log(str4[2]); // l
console.log(str4[3]); // l
console.log(str4[4]); // o

for (const ch of str4) {
    console.log(ch); // hello
}

// repeat: 문자열을 반복하는 함수
console.log("a".repeat(5)); // aaaaa (5번 반복)
console.log("abc".repeat(2)); // abcabc (2번 반복)
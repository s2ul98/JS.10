// 숫자 객체
// toString: numver -> string 변환
const num1 = 123;
const str = num1.toString();
console.log(typeof num1); // number
console.log(typeof str); // string

let num2 = 10.12345;

// toFixed: 소수점 아래 자릿수를 지정하는 함수
// ~ 자리까지 출력
console.log(num2.toFixed(0)); // 10 (소수점 아래 0자리)
console.log(num2.toFixed(2)); // 10.12 (소수점 아래 2자리)
console.log(num2.toFixed(4)); // 10.1235 (소수점 아래 4자리)

let num3 = 10.659;

// toPrecision: 전체 자릿수를 지정하는 함수
// 정수와 소수점을 포함하여 자리수를 결정
console.log(num3.toPrecision()); // 10.659 (전체 3자리)
console.log(num3.toPrecision(2)); // 11 (전체 2자리)
console.log(num3.toPrecision(3)); // 10.7 (전체 3자리)
console.log(num3.toPrecision(4)); // 10.66 (전체 4자리)

// 
const numStr = "-10";
const num4 = parseInt(numStr); // 문자열을 정수로 변환
console.log(typeof numStr); // string
console.log(typeof num4); // number

const str1 = '12.33';
const num5 = parsrInt(str1); // 문자열을 정수로 변환
console.log(str, typeof str1); // 12.33 string
console.log(num5, typeof num5); // 12 number

const str2 = '10 year';
const num6 = parseInt(str2); // 문자열을 정수로 변환
console.log(str2, typeof str2); // 10 year string
console.log(num6, typeof num6); // 10 number


const str3 = 'year 10';
const num7 = parseInt(str3); // 문자열을 정수로 변환
console.log(str3, typeof str3); // year 10 string
console.log(num6, typeof num7); // NaN number

const str4 = '10.33';
const num8 = parseFloat(str4); // 문자열을 실수로 변환
console.log(str4, typeof str4); // 10.33 string
console.log(num8, typeof num8); // 10.33 number

// NaN : Not a Number (숫자가 아님)
// 숫자로 변환할 수 없는 경우 NaN이 반환됨
// isNaN : 해당 문자열이 숫자로 변환 불가능한지 검사
const result1 = isNaN('aa');
console.log(result1); // true (숫자가 아님)

const result2 = isNaN('100');
console.log(result2); // false (숫자임)
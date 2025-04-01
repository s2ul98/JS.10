// 사용자 이메일의 도메인 추출

const email = 'user@naver.com';

// 구분자 : @
// const domain = email.split('@'); 
// console.log(domain); // ['user', 'naver.com']

const arr = email.split('@'); 
console.log(arr); // ['user', 'naver.com']

// 반환받은 배열에서 도메인만 꺼내기
console.log(arr[1]); // naver.com

// 확장자 목록
const allowedExtensions = ['.jpg', '.png', '.gif', '.pdf'];

// 해당 파일이 이미지인지 확인
const fileName = '사과.jpg';

// 확장자만 추출
// split slice substring
// 먼저 .(도트) 위치 확인
const index = fileName.lastIndexOf('.'); 
console.log(index); // 2 (사과.jpg에서 .의 위치)
// index 2번부터 문자열 끝까지 자르기
const extension = fileName.slice(2);
console.log(extension); //.jpg

// 확장자가 목록에 없을때는 false
// 해당 파일이 .jpg인지 .png인지 확인
if(allowedExtensions.includes(extension)) {
    console.log('해당 파일은 이미지입니다.');
} else {
    console.log('해당 파일은 이미지가 아닙니다.');
}
// string (문자열이 2글자 이상 넘어가면 배열데이터로 인지도 같이 한다!)
const str = 'I am a studnet';
console.log(str.length);
console.log('include', str.includes('am'));
console.log('indexOf',str.indexOf('am'));
console.log('padEnd', str.padEnd(15, 'h'));
console.log('slice', str.slice(0,4)); // 복사본 -> 변경
console.log('split', str.split('')); //
console.log('uppercase', str.toUpperCase());

const str2 = '  hello';
console.log('trim',str2.trim());
console.log('trim no',str2);

//number
const num = 3.141592;
console.log('toFixed',num.toFixed(2));

// Math 
console.log(Math.abs(-100)); // 절대값 반환
console.log(Math.ceil(num)); // 소수점 올림 -> 정수
console.log(Math.floor(num)); // 소수점 내림
console.log(Math.max(2,30,100));
console.log(Math.pow(2,4)); // 제곱식
console.log(Math.floor((Math.random()*10)+1)); // 0 이상 1미만의 수를 랜덤 반환
// 1에서 10사이의 수를 랜덤하게 들어내보세요

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()); // 0 1월 1 2월 
console.log(date.getDate());
console.log(date.getDay()); // 0 일 1 월 

// 조건문을 사용해서 date.getDay 받은 값을 
// 해당 요일로 보여지게 하는 코드를 작성해보세요

let today = date.getDay();

switch(today){
    case 0 : console.log('일욜일')
    case 1 : console.log('월욜일')
    case 2 : console.log('화욜일')
    case 3 : console.log('수욜일')
    case 4 : console.log('목욜일')
}

// let typing = propmt('원하는 글을써주세요') => 값을 콘솔창에 글자수를 보여주기 
// let typing = prompt('원하시는 글을 써주세요.');

// console.log(typing.length);

// 공백제거 함수 만들기 
// 내가 입력한 글에서 공백을 제거해주는 함수를 만들어보세요. 
// 만든 함수에 반환된 값은 콘솔창에 띄우주세요.
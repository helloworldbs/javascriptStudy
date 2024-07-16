// Data Type 
// 1. String 

let str1 = 'a';
let str2 = "";
let str3 = `${str1}`;
const str4 = "";
const str5= 'a';

// 2. Number 
let num1 = 10;
let num2 = 3.14;
let num3 = NaN;
let num4 = Infinity;

// 3.boolean - true, false
let bool1 = true;
let bool2 = false;

// 4. undefined : 변수 선언 O 값은 할당 X 
let undi;
console.log(undi);

// 5. null : 변수 선언 O, 값의 할당 null 
let nul = null;
console.log(nul);

// 6. Object 객체 데이터 { key : value }
let obj = {
    snack : "cookie",
    day : {
        month : 7,
        day : 9,
        today : 'TUE'
    }
}

console.log(obj);
console.log(obj.day);


// 7. Array 배열 데이터 [ index 0, 1,2,3,...]
let arr1 = [1,2,3,"hello"];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1.length);
console.log(arr1[arr1.length - 1]);

//연산자
//1.산술연산자 
let b = 3;
let c = 2;

console.log(b+c);
console.log(b-c);
console.log(b*c);
console.log(b/c);
console.log(b**c);
console.log(b%c);

// 2. 할당 연산자 
let d = 3;
console.log('d1',d);
d += 1;
console.log('d2',d);
d -= 1;
console.log('d3',d);

// 3. 비교 연산자 
// > < >= <= === == != 

// 4. 논리 연산자
// and && 
// or  || 
// not ! 

// data 제어하는 문법 : if 조건문 
// 개발자가 지정한 특정 조건에 따라 명령 실행
// if(조건true){
//     code 
// }
if(1<2){
    console.log("HELLO JULY");
}

// if(true){ code true } else { false code }
let z = 19;
z= 3;
if(z>10){
    console.log("10보다 크다!")
} else {
    console.log("10보다 작은걸...")
}

let typing = 10;
console.log( typing );
// 입력할 수 있는 변수 typing 에 값이 
// 3의 배수인지 아닌지 확인할 수 있는 식을 만들어보세요
// if else 사용! 
// 3의 배수이면 - consol.log(3의배수이다!)
// 3의 배수가 아니면, consol.log(3의배수가 아니다!)

// let y = 15;
//  y < 10 작으면 console.log(10보다작다)
//  y > 20 크면 console.log(20보다 크다 )
//  20 >= y > = 10 console.log(20이하 10이상이다)

let y = 15;

if(y <10){
    console.log("y는 10보다 작습니다!")
} else if(y>20){
    console.log("y는 20보다 크다!") 
} else {
    console.log("20이하 10이상이다!");
}

// let xy = 7;
// let ab = 12;

// xy가 5보다 크고 ab가 15보다 작으것이 둘다 참이면 
// && || 
// true '전부다 맞았어요'
// false'조건 전부가 참은 아니에요 '

let color =  "black";

switch(color){
    case "white": console.log('좋아하는 색이 동일')
        break;
    case "black" : console.log('정반대의 색을 좋아하는 군요')
        break;
    default: console.log("무지개색");
}

// 제어문 : 반복
                       
for(let i = 1; i < 11; i++) {
    console.log(i);
}

for(let a=15; a > 5; a--){
    console.log(a);
}

for(let n = 1; n < 11; n++) {
    console.log(4*n);
}

// for 반복문을 통해 구구단 3단을 완성시켜보세요 
// 4 X 1 = 4 ;
// 4 X 2 = 8;
// ..10

let f = 0;
while (f < 3){
    console.log(f)
    f++;
}
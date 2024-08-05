
// 함수 선언
function a(){
    return 3;
}

// 함수 표현식 
const b = function(){
    return 'hello';
}

// 화살표 함수  ES6 
const c = () => { 
    return console.log('bye bye');
}

console.log(a());
console.log(b());
c();

const d = function(){
    let c = 3;
    let d = 5;
    return c+d;
}

console.log(d());

const e = function(x,y){
    return x - y;
};

console.log(e(10,3));

// 함수 계산기 
const add = function(a,b){            
    return a + b; 
}

const minus = function(a,b){ 
    return a - b; 
}

const calculator = function(a,b,callback){
    const result = callback(a,b);
    return result;
}

console.log('add',calculator(3,4,add));
console.log('minus',calculator(5,3,minus));

function hello(n){
    return console.log(`hello ${n}이야`)
}

hello('7월')
hello('8월')
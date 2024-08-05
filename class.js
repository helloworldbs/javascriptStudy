// CLASS 

// function User(first, last, age){
//     this.firstName = first
//     this.lastName = last
//     this.age = age 
// }
//ES6 JS 

class User {
    constructor(first,last){
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName}의 성은 ${this.lastName} 입니다`
    }
}

// User.prototype.getFullName = function(){
//     return `${this.firstName}의 성은 ${this.lastName} 입니다`
// }

const student1 = new User('hello','KIM');

console.log(student1);

const student2 = new User('bye', 'Lee');
console.log(student2);

console.log(student1.getFullName());
console.log(student2.getFullName());


// 클래스로 Menu(m,s,totalprice){ main submenu totalprice , 메서드로 주문하신 메뉴는 {}{}는 총 {}입니다. }
class Pet{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name}가 밥을 먹고 있어요.`
    }
}
class Dog extends Pet{
    walk(){
        return `${this.name}은 하루에 1번은 꼭 산책을 합니다.`
    }
}

class Cat extends Pet{
    
}

const malti = new Dog('초코',2);
console.log(malti);

// Student 클래스를 상속받는 초등,중등,고등학생 클래스를 정의해보세요
// Student 클래스에는 name, studentId,age ,
// Student 클래스에는 introduce라는 메서드가 있어서 이름,나이,학번 순서대로 콘솔에 출력해주세요

class Student {
    constructor(name,studentId,age){
        this.studentName = name
        this.studentID = studentId
        this.studentAge = age 
    }
    introduce(){
        return `${this.studentName} 은 ${this.studentAge}이며 ${this.studentID}이다. `
    }

}

class PrimarySt extends Student {

}

class MiddleSt extends Student {
    
}
class HighSt extends Student {
    test(){
        return `고3이되면 ${this.studentName}도 수능을 친다.`
    }
}

const primary = new PrimarySt('김철수',123,10);
console.log(primary);
console.log(primary.introduce());

class Personal{
    #name
    constructor(name,info){
        this.#name = name
        this.info = info 
    }
}

const a = new Personal('kim',500);
console.log(a);
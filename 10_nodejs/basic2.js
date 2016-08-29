// 함수 생성
function sayHello(who) {
    return "Hello, " + who;
}

console.log(sayHello('IU'));

// 익명 함수
function calc(a, b, func) {
    return func(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calc(10, 20, add));
console.log(calc(10, 20, function (a, b) { return a - b }));

// 사용자 객체 생성
var obj = {
    name: "IU",
    age: 24,
    printInfo: function() {
        console.log("%s, %d", this.name, this.age);
    }
};

obj.printInfo();

// 함수 안에서 객체 생성
function User(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = function() {
        console.log("%s, %d", this.name, this.age);
    }
}

var obj2 = new User("IU", 24);
obj2.printInfo();

// prototype 타입을 이용
function User2(name, age) {
    this.name = name;
    this.age = age;
}

User2.prototype = {
    printInfo : function() {
        console.log("%s, %d", this.name, this.age);
    }
}

var obj3 = new User2("IU", 24);
obj3.printInfo();
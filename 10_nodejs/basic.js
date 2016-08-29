// 변수 선언
var a, b;

// 자료형 : 숫자, 문자열, 불린, 배열, 객체, undefined
a = 10;
b = "hello";
c = true;

console.log(typeof a, typeof b, typeof c);

var arr = ["one", "two", "three"];

console.log("first: " + arr[0] + ", last:" + arr[arr.length-1]);

// 연산자
a = 10, b = 3;

console.log("%d + %d = %d", a, b, a + b);
console.log("%d - %d = %d", a, b, a - b);
console.log("%d * %d = %d", a, b, a * b);
console.log("%d / %d = %d", a, b, a / b);
console.log("%d % %d = %d", a, b, a % b);

var c = "10";

console.log(a == c);    // true
console.log(a === c);   // 값과 타입 둘다 같은 경우 true
console.log(a != c);
console.log(a !== c);   // 값 또는 타입이 다른 경우 true

// 반복문
// for-in 루프 (배열, 객체)
var names = ["GD", "TOP", "태양"];

for(var i in names) {
    console.log("%d : %s", i, names[i]);
}

// for-each
names.forEach(function (item, index) {
    console.log("%d : %s", index, item);
});

// 배열 항목 추가
names.push("대성");

// 배열 항목 삭제
names.splice(2, 1);
names.forEach(function (item, index) {
    console.log("%d : %s", index, item);
});

names.splice(2, 1, "승리");
names.forEach(function (item, index) {
    console.log("%d : %s", index, item);
});

// 객체
var obj = {
    "name": "IU",
    "job": "singer",
    "age": 24
}

console.log("%s, %s, %d", obj.name, obj.job, obj.age);
console.log("%s, %s, %d", obj["name"], obj["job"], obj["age"]);
console.log(obj);
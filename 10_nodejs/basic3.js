// 에러 처리
try {
    // var a = b;
    // throw "Error 발생";
    throw new Error("Error 발생2");
}catch(err) {
    console.log(err);
    console.log(err.message);
}

// 일정 시간 뒤 함수 호출
setTimeout(function() {
    sayHello();
}, 2 * 1000);

function sayHello() {
    console.log("Hello!!");
}

var id = setInterval(sayHello, 1 * 1000);

setTimeout(function() {
    clearInterval(id);
}, 5 * 1000);
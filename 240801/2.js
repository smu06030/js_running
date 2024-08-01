// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력값 : yuno2
// a 함수는 name을 가지고 있지 않지만 정의된 시점에 렉시컬 환경을 기억하기 때문에 스코프 체인을 통해 myName 함수 안에 있는 name 속성에 접근할 수 있습니다. 
var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();


// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력값 : 2
// var x 변수가 호이스팅 되면서 코드 실행문을 만나면 x를 1로 할당하는데 var 키워드는 함수 스코프를 갖기 때문에 if문 안에 있는 var x = 2를 만나면 재할당 하면서 x = 2로 덮어쓰여집니다.

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 일반함수는 this를 동적으로 바인딩합니다. 지금 normal은 method 함수 내부에서 호출되지만 일반 함수로서 호출했기 때문에 전역 객체를 가리키게 됩니다.
// 화살표함수는 this를 정적으로 바인딩하기 때문에 정의된 위치의 상위 스코프의 this를 가리킵니다. 그래서 method 함수의 this는 nameObj를 가리키기 때문에 yuno를 출력합니다.
const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();


// 1. <빈칸>을 작성해주세요

const obj1 = {
  value :20,
  getValue(){
      return this.value;
  }
  
}
console.log(obj1.getValue()) ; //  출력값 20


// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
// 첫 번째 this는 객체의 메소드로 호출했기 때문에 this가 obj2를 가리키게 됩니다.
// 두 번째 this는 method 내부에서 innerMethod 함수를 호출했는데 innerMethod는 화살표함수로 선언해서 상위 스코프의 this를 가리키게 됩니다.
// 근데 setTimeout은 일반 함수로 정의되어 있기 때문에 전역 객체를 가리키게 됩니다. 그래서 웹 브라우저에선 window 객체를 가리키게 됩니다.
const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
            });
        }
        innerMethod();
    }
}

obj2.method();




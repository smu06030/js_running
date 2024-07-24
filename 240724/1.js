let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 선언해 주었지만 초기화를 하지 않아서 undefined가 출력됩니다.

const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 상수이기 때문에 재할당을 할 수 없어서 TypeError가 납니다.

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열요소는 0번부터 시작하기 때문에 19가 출력됩니다.

let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// msSchedule은 빈 문자열이기 때문에 false를 출력합니다.
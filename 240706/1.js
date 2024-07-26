// 1
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);

// 2
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = obj1;
obj2.d = 4;

console.log(obj1, obj2)
console.log(obj1 === obj2)

// 얕은 복사는 값을 복사하는 게 주소값을 참조하기 때문에 obj2를 수정해도 obj1이 같이 수정됩니다.
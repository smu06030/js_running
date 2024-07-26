//해당 문제를 forEach로 변경하여 풀어주세요
let arr = [10, 20, 30] 

// 해당 로직을 작성하세요  
// 결과 값: [100, 200, 300] 출력해주세요 
arr.forEach((el, index) => arr[index] = el * 10)
console.log(arr)


let arr2 = [10, 22, 33]
let result = [];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
// 결과값 [10]
arr2.forEach((el, index) => el % 5 === 0 ? result.push(el) : 0);
console.log(result)
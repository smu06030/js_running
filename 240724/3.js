function oddOrEven(number) {
  let result = "";

  if(number % 2 === 0) result = "짝수";
  else result = "홀수";

  return result
}

console.log(oddOrEven(10)); // 결과값 "짝수";
console.log(oddOrEven(7)); // 결과값 "홀수";
function calculator(first, op, last) {
  let result;
  switch(op){
    case '+' :  result = first + last;
    break;
    case '-' :  result = first - last;
    break;
    case '*' :  result = first * last;
    break;
    case '/' :  result = first / last;
    break;
  }
  console.log(result)
}

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5
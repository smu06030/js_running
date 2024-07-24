const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

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
  
  return result;
}

function plusScore(scores) {
  let sum = 3;

  for(let i=0; i<scores.length; i++){
    scores[i] = calculator(scores[i], '+', sum)
  }
}

plusScore(scores)

console.log(scores);
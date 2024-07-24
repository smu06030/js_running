const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function calculator(scores, sum) {
  for(let i=0; i<scores.length; i++){
    scores[i] += sum
  }
}

function plusScore(scores) {
  let sum = 3;

  calculator(scores, sum)
}

plusScore(scores)

console.log(scores);
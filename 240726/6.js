// 1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
 
];

// 여기에 코드를 작성해주세요
console.log(students
  .filter(student => (student.scores[0] + student.scores[1]) / student.scores.length >= 80)
  .map(student => student ? student.name : null))
// 예상 출력: ["이재상", "김준현"]

// 2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
console.log(numbers
  .map(number => number * 2)
  .filter(number => number <= 30))

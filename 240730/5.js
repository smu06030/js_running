function taskA() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task A Complete");
      }, time);
  });
}

function taskB() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task B Complete");
      }, time);
  });
}

function taskC() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task C Complete");
      }, time);
  });
}

(async function findFirstCompletedTask(){
  const result = await Promise.any([taskA(), taskB(), taskC()])

  console.log(result);
})();
// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.
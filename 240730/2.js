const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

async function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(url === API_URL)
        resolve("성공")
      else
        reject("실패")
    }, 3000)
  })
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
}

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
(async () => {
  try{
    const response = await getData(API_URL);
    console.log(response)
  }catch(err){
    console.error(err)
  }
})();

(async () => {
  try{
    const response = await getData(WRONG_URL);
    console.log(response)
  }catch(err){
    console.error(err)
  }
})();
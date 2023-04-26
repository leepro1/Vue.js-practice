let cnt = 0;

function printCurrentTime() {
  console.log(new Date());
  
  cnt++;

  if (cnt === 10) {
    clearInterval(id); // 카운터가 10이면 clearInterval로 호출 종료
  }
}

let id = setInterval(printCurrentTime, 1000);
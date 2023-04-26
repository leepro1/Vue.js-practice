// dice 함수 구현
function dice(){
    return Math.floor(Math.random() * 6 + 1);
}

for (let i = 0; i < 10; ++i) 
    console.log(dice());
// sum(a) 함수 구현 
function sum(a){
    let result=0;
    for (let i = 0; i < a.length; ++i)
        for (let j = 0; j < a[i].length; ++j) 
            result+=a[i][j];

    return result;
}

let a1 = [[1, 2],[3, 4, 5]];
let a2 = [[1], [2, 3, 4], [5, 6]];
console.log(sum(a1));
console.log(sum(a2));
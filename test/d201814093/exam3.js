// types 함수 구현 
function types(a){
    let b=[];
    for (let i = 0; i < a.length; ++i) 
        b[i]=typeof a[i];
    return b;
}

console.log(types([3, "hello", true]));
console.log(types(["world", []]));
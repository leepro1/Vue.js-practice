// remove(a, index) 함수 구현
function remove(a,index){
    a.splice(index, 1);
}

let a = [1, 2, 3, 4, 5];
remove(a, 1);
remove(a, 2);
console.log(a);
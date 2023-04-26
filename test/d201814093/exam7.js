let a1 = [1, 2, 3]; 
let a2 = a1.slice(0); // a1 배열을 복제해서 a2에 대입

a1[0] = 10;
a2[0] = 20;

console.log(a1);
console.log(a2);
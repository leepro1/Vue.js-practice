let p1 = { 
    name: "홍길동", 
    age: 16
}; 

let p2 = Object.assign({ }, p1); // p1 객체를 복제해서 대입

console.log(p1 == p2); 
console.log(p2);
let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 20 },
    { name: "전우치", age: 19 },
];
  
let maxAgePerson = persons.reduce((p1, p2) => p1.age > p2.age ? p1 : p2);
console.log(maxAgePerson.name);
//boolean 외에 false로 인식하는 것들
let a = undefined,
  b = null,
  c = 0,
  d = NaN,
  e = "";
console.log(a ? "true" : "false");
console.log(b ? "true" : "false");
console.log(c ? "true" : "false");
console.log(d ? "true" : "false");
console.log(e ? "true" : "false");

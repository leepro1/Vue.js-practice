// removes 함수 구현 
function removes(s) {
  let r = "";
  for (let i = 0; i < s.length; ++i)
    if ("aeiou".indexOf(s[i]) < 0) r = r + s[i];
  return r;
}

console.log(removes("helloworld"));
console.log(removes("onetwothree"));
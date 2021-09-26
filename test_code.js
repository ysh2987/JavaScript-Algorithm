let a = 1
let plus = function(b) { b = b + 1}
plus(a)
console.log(a) // 1


// var a = { v: 1}
// var add = function (b) { b.v = b.v + 1} 
// add(a)
// console.log(a.v)

function add(x,y){
  return x + y
}
function sub(x,y){
  return x - y
}
function mul(x,y){
  return x * y
}
function div(x,y){
  return x / y
}

function calculator(callback, x, y){
  return callback(x,y)
}
console.log(calculator(add,5,7)) 
console.log(calculator(sub,5,7)) 
console.log(calculator(mul,5,7)) 
console.log(calculator(div,5,7)) 
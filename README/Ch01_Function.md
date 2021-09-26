# 함수
- 함수는 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합이다.
- 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록 코드이다.
- 함수는 정의 부분과 호출 부분으로 구성한다.
- 함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내로 작성을 권장한다.

## 함수 정의
### 1. 함수 선언식
```javascript
function add(x,y){
  return x + y
}
```
### 2. 함수 표현식
```javascript
const add = function (x, y){
  return x+ y
}
```
### 3. 화살표 함수
```javascript
const add = (x,y) => x + y
```

## 함수 호출
- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
- ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정이 가능하다.
- 매개변수의 갯 수가 다를경우에도 에러를 출력하지 않는다.
```javascript
function print_add(x, y = 10){ // y의 매개변수가 들어오지 않을 경우 초기 값 10
  console.log(x + y)
}
print_add(10, 20, 30) // 30
print_add(10, 20) // 30
print_add(10) // 20
print_add() // NaN
// 매개변수가 적게 들오게 될경우 undefined를 반환해 NaN이 출력된다.

// dynamic parameters
function print_min(){
  console.log(arguments[0] - arguments[1])
}
print_min(10, 20, 30)
print_min(10, 20)
print_min(10)
print_min()
```

## 재귀 함수
- 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
- 재귀 함수는 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 exit code가 필요하다.

```javascript
function recursive(num) {
  if (num == 0 ) return 0
  return num + recursive(num -1) // 3 + 2 + 1 + 0
}
console.log(recursive(3))

function factorial(x){
  if (x ===0) return 1
  return x * factorial(x-1)
}
console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1
```

## 콜백 함수
- 콜백함수는 다른 함수의 매개변수로 전달되어 수행되어지는 함수
- 고차함수란 매개변수를 통해 함수를 받아 호출하는 함수

```javascript
// 계산기 예제
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
console.log(calculator(add,5,7)) // 12
console.log(calculator(sub,5,7)) // -2 
console.log(calculator(mul,5,7)) // 35
console.log(calculator(div,5,7)) // 0.7142857142857143
```

## call by *
- call by value
  - 값에 의한 복사로 함수 내에서 매개변수 값을 변경 시켜도 영향이 미치지 않음
  - 원시 타입을 매개 변수로 넘겼을 때 발생한다.

```javascript
let a = 1
let add = function(b) { b = b + 1}
add(a)
console.log(a) // 1
```

- call by reference
  - 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
  - 객체 타입을 매개 변수로 넘겼을 때 발생한다.

```javascript
var a = { v: 1}
var add = function (b) { b.v = b.v + 1} 
add(a)
console.log(a.v) // 2
```



## 연습문제
```javascript
function MAX(x,y){  
  return x-y > 0 ? x : y

}

console.log(MAX(0, 3))
console.log(MAX(-1, 5))
console.log(MAX(100, 7))
```
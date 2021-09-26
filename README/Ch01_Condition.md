# 조건문 
## if-else
- 알고리즘에서 논리적 비교를 할 때 사용되는 조건식
- if, else if, else 키워드를 통해 구성되며, 조건식에 맞을 경우 중괄호 `{}`내에 있는 명령문을 수행한다.
- 단, 실행 문장일 단일 문장일 경우에는 `{}` 생략 가능하다.

```javascript
let apple_price = 9

if (apple_price >= 10){
  console.log("very expensive :("); 
} else if (apple_price < 5){
  console.log("very cheap :)");
} else {
  console.log("nice");
}
```
## 3항 연산자
- 3항 연산자를 통해 if-else를 대체하여 사용가능
- 3항 연산자: 변수 = (조건식) ? 참일 때 값 : 거짓일 떄 값
```javascript

let age = 20;
// 조건문 : if-else
if (age < 19){
  msg = "The user is not an adult."
} else {
  msg = "The user is an adult"
}
console.log(msg)

// 조건문 : 3항 연산자
msg_another = age < 19 ? "The user is not an adult." : "The user is an adult";
console.log(msg_another)
```
## switch
- switch는 표현식을 평가하여 그 값이 일치하는 case문을 실행하는 조건문
- switch, case, break, default 키워드를 통해 구성되며, switch의 조건에 맞는 case 구문을 수행
- 일반적으로 하나의 case만 수행되도록 case끝을 break로 끝맺음
```javascript
let browser = "chrome"

switch (browser){
  case "Explorer":
    msg = "ActiveX installation required";
    break;
  case "chrome":
  case "Firefox":
  case "Safari": 
    msg = "Supported browsers";
    break
  default :
    msg ="UnSupported browsers"
}
console.log(msg)
```

## 연습 문제 
```javascript
const day = 4
let weekend = ""

switch(day) {
  case 1 : 
    weekend = '월요일'; break;
  case 2 : 
    weekend = '화요일'; break;
  case 3 : 
    weekend = '수요일'; break;
  case 4 : 
    weekend = '목요일'; break;
  case 5 : 
    weekend = '금요일'; break;
  case 6 : 
    weekend = '토요일'; break;
  case 7 : 
    weekend = '일요일'; break;
}

console.log(weekend)
```
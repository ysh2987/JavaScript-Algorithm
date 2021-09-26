# 기본 용어
## 키워드 
- 자바스크립트에서 문법을 만들 때 미리 정해진 용도로 동작하기 위해 정의해 놓은 단어이다.
- 아래 표는 자바스크립트에 예약된 키워드 목록( *는 ES5와 ES6에 추가된 단어)이다.

|||||
|--|--|--|--|
|abstract| arguments|*await| boolean|
|break| byte| case| catch|
|char|*class| const| continue|
|debugger|default|delete| do|
|double|else|*enum|eval|
|*export| *extends|FALSE|final|
|finally| float| for| function|
|goto| if| implements| import*|
|in| instanceof| int| interface|
|*let| long| native| new|
|null| package| private| protected|
|public| return| short| static|
|*super| switch| synchronized| this|
|throw| throws| transient| TRUE|
|try| typeof| var |void|
|volatile| while| with| yield|

## 식별자 
- 스크립트에서 변수나 함수에 이름을 붙일 때 사용하는 단어이다.
- 대소문자를 구별하며 유니코드 문자셋을 이용한다.
- 자바스크립트 내 식별자 규칙
  1. 키워드 사용 불가
  2. 숫자로 시작 불가
  3. 특수문자는 _와 $만 사용가능
  4. 공백 문자 포함 불가

|식별자 사용 가능 단어| 식별자 사용 불가 단어|
|--|--|
|algo|for|
|algo123|void|
|_algo|123algo|
|$algo|al go|

## 주석 
- 프로그램 구현 시 개발자의 설명 및 이해를 쉽게 도와주는 문장으로 실제 실행 코드에는 포함되지 않는다.
- 주석의 종류는 단일 행 주석 `//`과 다중 행 주석 `/* */`가 있다.

```javascript
// 단일 행 주석
/* 다중 행
   주석
*/ 
```


# 변수와 상수

## 변수
- 변경 가능한 값을 저장하기 위한 기억 공간
- 사용하기 전 반드시 선언이 필요하다.
- 중복 선언은 불가능
- 키워드 : let
- ex) let A = 123
- A = 456으로 재할당이 가능하다.

## 상수
- 변경 불가능한 값을 저장하기 위한 기억 공간
- 사용하기 전 반드시 선언이 필요하다.
- 중복 선언은 불가능
- 키워드 : const
- ex) const B = 123
- B = 456으로 재할당 하려 하면 에러가 발생한다.

```javascript
// 한 줄에 여러 변수를 선언하고 초기화 할 수 있다.
let name = 'song',
  age = 13,
  msg = 'hello'

```

## 호이스팅
- 코드에 선언된 변수 및 함수를 유요한 범위의 코드 상단으로 끌어 올리는 작업
- var의 변수/함수의 선언만 위로 올려지고, 할당은 올려지지 않음
- let/const 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않음

```javascript
// var
console.log(name_1) // undefined 
var name_1 = "john"
console.log(name_1) // john

// hoisting
var name_2;
console.log(name_2) // undefined 
name_2 = "john";
console.log(name_2) // john
// var에 호이스팅 동작방식을 설명한 코드이다 var코드와 hoisting코드가 동일하다.

// let
console.log(name_3)
let name_3 = "john" // error 발생 
```

# 자료형 
## 자료형 종류
- 목적에 따라 특별한 성질이나 정해진 범주를 갖고 있는 데이터의 종류
- 자바스크립트에서는 6가지의 원시 타입 자료형과 1가지의 객체 타입 자료형으로 구성되어 있다.

|구분|데이터 타입|설명|
|--|--|--|
|원시 타입|Boolean|논리적 값으로 true,false|
|원시 타입|null|존재하지 않거나 유효하지 않은 주소 표시|
|원시 타입|undefined|선언 후 값을 할당하지 않은 변수|
|원시 타입|number|정수, 실수 등의 숫자, 정수의 한계는 +-2^53|
|원시 타입|bigint|number의 한계 이상의 값을 표현할 때 사용한다.|
|원시 타입|string|빈 문자열이나 글자들을 표현하는 문자열|
|원시 타입|symbol|문자열과 함께 객체 property로 사용, ES6에 추가|
|객체 타입|object|두개 이상의 복잡한 개체 저장 가능|

## boolean
- boolean은 논리적인 값을 표현하는 자료형이다.
- 참인 true와 거짓은 false, 두 가지 값만 존재한다.
- 주로 조건문 등에서 동작 판단의 기준으로 사용한다.

## null 
- null은 값이 비어있다는 의미로 표현되는 자료형이다.
- 존재한지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 나타내는데 사용한다
```javascript
console.log(typeof null) // object 하위 버전 호환성으로 object로 표기

const null_check = null 
console.log(null_check === null) // true
```
## undefined
- undefined는 값이 할당되어 있지 않은 상태를 나타낼 때 사용되는 자료형이다.
- 변수 선언 후 초기화 하지 않는다면, undefined가 자동으로 할당된다.
```javascript
let name;  // 할당 후 초기화 하지 않음
console.log(name) // undefined
```
## number
- number(숫자형)은 정수, 부동소수점(floating point) 숫자를 표현하는 자료형이다.
- number와 관련된 연산은 사칙연산(+,-,*,/)가 대표적이다.
- number에는 일반적인 숫자 외에 infinity, -infinity, NaN(Not a Number) 같은 특수 숫자 값이 포함되어 있다.
- number에서는 2^53 -1 보다 큰 값을 사용할 수 없으며, 더 큰 정수를 다루고 싶다면 bigint 자료형 사용이 필요하다.

```javascript
let num_1 = 123.0
let num_2 = 123.456
let num_3 = 1 / 0
let num_4 = 123456n; // Bigint("123456")

console.log(num_1 - num2) // -0.456000000000307
console.log((num_1 - num2).tofixed(3))
// 소수점 연산은 정확히 떨어지지 않기 떄문에 반올림을 해줘야 원하는 값을 얻을 수 있다.
console.log(num_3) //infinity 양수의 무한대값
console.log(num1 / "hello") // NaN
console.log(typeof num_4) bigint
```
## string
- string은 문자, 문자열을 표현하는 자료형
- 자바스크립트에서 문자열은 3가지 종류의 따옴표로 표현 가능하다.
  - 큰 따옴표: "hello"
  - 작은 따옴표: 'hello'
  - 빽틱 : \`hello\` 
- 빽틱안에 ${}를 사용하면 문자열과 변수 값을 사용할 수 있다.
```javascript
let A = 16
let B = `나의 나이는 ${A}입니다.`
```

# 객체 타입
## object
- object는 다수의 원시 자료형을 포함하거나 복잡한 개체를 표현할 수 있는 자료형이다.
- object는 Object() 혹은 중괄호 {}를 통해 생성한다.
- object의 개체는 key: value 형태로 표현하며, 접근은 object.key 형태로 표현한다.
- 추가는 obj.key = value로 수행
- 삭제는 delete명령어로 수행
```javascript
let user = {
  name: "john",
  age: 27,
};
console.log(typeof user) // object
console.log(typeof user.name) // string
console.log(typeof user.age) // number

console.log(user) // {name: "john", age: 27}
console.log(user.name) // john
console.log(user.age)  // 27

user.age = 30 // 변경
console.log(user.age) //30

user.weight = 72 // 추가 
delete user.age // 삭제
```

## object 복사
- object의 값을 복사할 때는 대상 전체가 아닌 object 내 주소 값만 복사되는 문제가 발생한다.
- 가리키는 대상 전체를 복사하는 방법은 얕은복사, 깊은복사를 통해 가능하다.
- 아래 코드는 객체 복사의 문제점이다.
```javascript
let user = {
  name: "john",
  age: 27,
}
let admin = user

admin.name = "park"
// admin의 이름을 변경했는데 user에 이름도 같이 변경된다.
user.age = 30
// 이경우도 user에 age를 변경해도 admin에 age도 변경된다.
```

## 얕은 복사
### 1. 반복문 for문을 통해 객체 복사
```javascript
let user = {
  name: "john",
  age: 27,
}
let admin = {}
for (let key in user){
  admin[key] = user[key]
}
```
### 2. Object.assign 으로 복사
```javascript
let admin = Object.assign({}, user)
// 첫 매개변수는 복사해 반환할 객체 
// 두번째 매개변수는 복사하고자 하는 요소이다.
```
### 3. 전개연산자를 이용한 복사(ES6에서부터 지원한다.)
```javascript
let admin = { ...user }
// ...은 {user.name, user.age}와 같은 의미이다.
```

- 얕은 복사 문제점
  - 객체 내 또 다른 객체가 있다면 복사되지 않는다.
  - 이 경우 깊은복사를 사용해야 한다.

## 깊은 복사
### 1. 재귀 함수를 이용한 깊은 객체복사
### 2. JSON 객체를 이용한 깊은 복사, 객체를 문자열로 변환후 다시 객체로 변환해주는 방법이다.

```javascript
// JSON을 이용한 깊은 복사
let admin_json = JSON.parse(JSON.stringify(user))
// stringify는 객체를 문자열로 변환하는데 이떄 원본 객체와의 참조가 끊킨다.
```

# 형 변환
- 자바스크립트는 느슨한 타입 언어 혹은 동적 타입 언어로 변수의 자료형을 명시적으로 선언할 필요가 없는 언어이다.
- 연산자로 인한 계산이나 변수에 전달되는 값은 자동으로 암묵적 형 변환 수행한다.
- 강제적 형 변환을 위해서는 자료형 함수를 이용해 명시적으로 형 변환을 수행해야한다.

## String 형변환
```javascript
// string
console.log(String(123))
console.log(String(1/0))
console.log(String(-1 / 0))
console.log(String(NaN))
console.log(String(true))
console.log(String(false))
console.log(String(undefined))
console.log(String(null))
console.log(String("haha"))
// 모든 결과 값이 string으로 변환 된다.
```
## Number 형변환
- Number는 정수와 실수를 모두 포함하는 자료 형 변환이므로, 정수 혹은 실수의 명시적 변환은 parse 함수를 사용한다.
- 정수 변환: parseInt(피연산자), 실수 변환: parseFloat(피연산자)
```javascript
// Number
console.log(Number("")) // 0 
console.log(Number("123")) // 123
console.log(Number("hello")) //NaN
console.log(Number("123ab123")) //NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) //NaN
console.log(parseInt('123.123')) // 123 소수점 제외한 정수
console.log(parseFloat('123.123')) // 123.123 실수
```

## Boolean 형변환
```javascript
// Boolean
console.log(Boolean(""))  // false
console.log(Boolean("123")) // true
console.log(Boolean("hello")) // true
console.log(Boolean("0")) // true
console.log(Boolean(0))  // false
console.log(Boolean(123)) // true
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
// 빈 문자열은 false 문자가 있으면 true
// 숫자 0은 false 나머지는 true
```

# 연산자
- 연산자는 프로그램에서 데이터를 처리하여 결과를 산출할 목적으로 사용되는 문자
- 연산의 대상 값은 피연사자라고 하며, 피 연산자의 개수에 따라 단항/이항/삼항 연산자의 종류가 존재한다.

||||||
|--|--|--|--|--|
|단항 연산자|부호연산자 `+`,`-`|증감 연산자 `++`,`--`|논리 연산자 `!`|비트 연산자 `~`|
|이항 연산자|산술 연산자 `+`,`-`,`*`,`/`,`%`,`**`|대입 연산자 `=`,`+=`,`-=`|비교 연산자 `==`, `!=`|논리 연산자 `&&`,`||`|
|삼항 연산자|(조건식) ? 참일 경우의 식 : 거짓일 경우의 식|||


## 비교 연산자
- 좌항과 우항의 피연산자를 비교한 다음 결과값을 논리적 자료형으로 반환하는 연산자
- ==은 단순 값의 같음을 비교하는 동등 비교, ===는 자료형까지 같음을 판단하는 일치 비교 연산자

|비교연산자|설명|예제|결과|
|--|--|--|--|
|a > b|a가 b보다 크면 true 아니면 false| 5 > 3| true|
|a < b|a가 b보다 작으면 true 아니면 false| 5 < 3 | false|
|a >=b|a가 b보다 크거나 같으면 true 아니면 false| 5 >= 10| false|
|a <=b|a가 b보다 작거나 같으면 true 아니면 false| 10 <= 10| true|
|a == b| a와 b가 같으면 true 아니면 false| 5 == '5'| true|
|a != b| a와 b가 같지 않으면 true 아니면 false| 5 != '5'| false|
|a === b| a와 b의 자료형과 값이 같으면 true 아니면 false| 5 === '5'| false|
|a !== b| a와 b의 자료형과 값이 다르면 true 아니면 false| 5 !== '5'| true|

## 논리 연산자
- 좌항과 우항의 피연산자 간 논리 값을 연산하여 참 또는 거짓을 결과로 얻는 연산자
- 논리 연산자 : `&&` (AND), `||` (OR), `!` (NOT)

|x|y|x∥y|x && y|
|--|--|--|--|
|true|true|true|true|
|true|false|true|false|
|false|true|true|false|
|false|false|false|false|

# SCOPE
- 변수 혹은 상수에 접근할 수 있는 범위
- 모듈/함수 내 코드에서 동일한 변수 사용시 간섭을 줄이는 용도로 사용한다.
- Scope는 Global Scope와 Local Scope의 타입으로 구분한다.
  - Global Scope: 전역에 선언되어 어디에서도 접근 가능하다.
  - Local Scope(block, function level scope) : 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능하다.

```javascript
// Global
let x = 1 
let y = 2 

console.log(x) // 1
console.log(y) // 2

{
  // local scope
  let x = 3
  let y = 4
  console.log(x) // 3
  console.log(y) // 4
}

function scope(){
  let x = 5
  let y = 6
  let z = 10
  console.log(x) // 5
  console.log(y) // 6
}

console.log(x) // 1
console.log(y) // 2
console.log(z) // not defined error
```

// Dictionary() : 개체(Entity)를 저장할 생성자
function Dictionary(items = {}){
    this.items = items
}

// getBuffer() : 모든 개체
Dictionary.prototype.getBuffer = function(){
    return {...this.items} 
}
// clear() : 초기화
Dictionary.prototype.clear = function(){
    return this.items = {}
} 

//size() : 크기 반환
Dictionary.prototype.size = function(){
    return Object.keys(this.items).length
}
// has() : 개체 존재 여부 확인 (key 정보를 배열로 반환)
Dictionary.prototype.has = function(key){
    return key in this.items
    // return this.items.hasOwnProperty(key)
}
// set(): 개체(Entity) 추가
Dictionary.prototype.set = function(key, value){
    this.items[key] = value
}

// get(): 개체(Entity)의 value 반환
Dictionary.prototype.get = function(key){
    return this.has(key) ? this.items[key] : undefined
}

// remove : 개체(Entity) 삭제
Dictionary.prototype.remove = function(key){
 if(this.has(key)){
    delete this.items[key]
    return true
 }   
 return false
}

let dict = new Dictionary({age : 10, name: 'jhon'})
console.log(dict.getBuffer()) //{ age: 10, name: 'jhon' }
console.log(dict.size()) // 2 
console.log(dict.clear()) // {}

dict.set('age', 30)
dict.set('name', 'hello')
dict.set('heigt', 200)
console.log(dict.getBuffer()) // { age: 30, name: 'hello', heigt: 200 }
console.log(dict.has('age')) // true
dict.remove('age')
console.log(dict.getBuffer()) // { name: 'hello', heigt: 200 }
console.log(dict.get('name')) // hello
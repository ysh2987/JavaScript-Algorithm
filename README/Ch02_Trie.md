# 트라이 (Trie)
- 탐색 트리의 일종으로, 문자열이나 연관 배열을 저장하는데 사용되는 트리 자료 구조
- 트라이 특징
    - 문자열 검색에 특화된 자료구조
    - 문자열 길이가 M일 경우 O(M)의 시간 복잡도로 검색 가능
- 구현할 메서드
    - Try.insert() : 데이터 추가
    - Try.search() : 데이터 검색
    - Try.delete() : 데이터 삭제

## 트라이 구현하기
```javascript
// TrieNode(): 문자 노드와 끝 단어 표시를 위한 노드 생성자
function TrieNode() {
  this.children = {}; // key: 문자, value: TrieNode
  this.endOfWord = false; // 단어 여부
}

// Trie(): 루트 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}

// insert(): 문자열 추가
Trie.prototype.insert = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i]
    let node = current.children[ch]

    if (node === undefined) {
      node = new TrieNode()
      current.children[ch] = node
    }

    current = node
  }

  current.endOfWord = true
}

// search(): 문자열 검색
Trie.prototype.search = function (word) {
  let current = this.root

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch]

    if (node === undefined) {
      return false
    }

    current = node
  }

  return current.endOfWord
};

// delete(): 문자열 삭제
Trie.prototype.delete = function (word, current = this.root, index = 0) {
  if (index === word.length) {
    if (!current.endOfWord) return false

    current.endOfWord = false;

    return Object.keys(current.children).length === 0;
  }

  let ch = word[index]
  let node = current.children[ch]

  if (node === undefined) return false;

  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
  if (isDeleteNode) {
    delete current.children[ch]
    return Object.keys(current.children).length === 0;
  }

  return false
}

let trie = new Trie()

trie.insert("be") 
trie.insert("bee") 
trie.insert("can") 
trie.insert("cat")
trie.insert("cd")

console.log(trie.search("bee")) // true
trie.delete("bear")
console.log(trie.search("bee")) // true
trie.delete("b")
console.log(trie.search("bee")) // true
trie.delete("bee")
console.log(trie.search("bee")) // false

console.log(trie.root.children)
console.log(trie.root.children["b"])
console.log(trie.root.children["b"].children["e"])

```
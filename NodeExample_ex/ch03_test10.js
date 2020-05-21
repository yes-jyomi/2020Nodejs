var Users = [
    { name: '소녀시대', age: 20 },
    { name: '걸스데이', age: 22 },
    { name: '티아라', age: 23 }
];

console.log('배열 요소의 수: %d', Users.length);

for (var i = 0; i < Users.length; i++) {
    console.log('\n배열요소 ' + i + '\n이름: %s', Users[i].name + '\n나이:', Users[i].age);
}

console.log('\nforEach 구문 사용하기');
Users.forEach(function(item, index) {
    console.log('\n배열요소 ' + index + '\n이름: %s', item.name + '\n나이:', item.age);
});
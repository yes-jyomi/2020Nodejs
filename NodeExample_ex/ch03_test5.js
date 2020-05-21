var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';
Person.add = function(a, b) {
    return a + b;
};

console.log('나이: %d\n이름: %s\n10 + 10 = %d', Person.age, Person.name, Person.add(10, 10));
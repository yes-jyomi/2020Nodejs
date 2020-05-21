var Calc = require('./calc33');

var calc = new Calc();

calc.emit('start');
calc.emit('cal', 'calculator');
calc.emit('vartrans', 'a', 'b');
var a = 10;
var b = 5;

console.log('a + b = %d', Calc.prototype.add(a, b));
console.log('a - b = %d', calc.substract(a, b));
console.log('a * b = %d', calc.multiply(a, b));
console.log('a / b = %d', calc.divide(a, b));

calc.emit('stop');

console.log(Calc.title + '에 이벤트 종료됨');
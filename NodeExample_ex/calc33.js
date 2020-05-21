var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
    // var selt = this;

    this.on('start', function() {
        console.log('Calc에 start event 전달');
    });

    this.on('cal', function(calculator) {
        console.log('계산기 이벤트 발생함 : %s', calculator);
    });

    this.on('vartrans', function(a, b) {
        console.log('계산기 이벤트 발생함 : %s', a, b);
    });

    this.on('stop', function() {
        console.log('Calc에 이벤트 종료');
    });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b) {
    return a + b;
}

Calc.prototype.substract = function(a, b) {
    return a - b;
}

Calc.prototype.multiply = function(a, b) {
    return a * b;
}

Calc.prototype.divide = function(a, b) {
    return a / b;
}

module.exports = Calc;
module.exports.title = 'calculator';
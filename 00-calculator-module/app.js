var sum = require('./operations/sum')
var subs = require('./operations/substraction')
var mult = require('./operations/multiplication')
var div = require('./operations/division')
var moment = require('moment');

var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]

console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
sum (firstOperand, secondOperand);
mult (firstOperand, secondOperand);


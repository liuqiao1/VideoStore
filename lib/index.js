'use strict';

var movie = require('./Movie');
var customer = require('./Customer');

var c1 = new customer('c1');
var m0 = new movie(0, 'm0', 0);
m0.type = 2;
var m1 = new movie(1, 'm1', 1);
var m2 = new movie(2, 'm2', 2);

c1.addRental(2, m0);
c1.addRental(1, m2);
c1.addRental(5, m1);

console.log(c1.statement);

var result = c1.statement();
console.log(result);

// 如果m0的type 需要变成2？
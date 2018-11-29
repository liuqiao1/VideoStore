const movie = require('./Movie');
const customer = require('./Customer');


const c1 = new customer('c1');
const m0 = new movie(0, 'm0', 0);
const m1 = new movie(1, 'm1', 1);
const m2 = new movie(2, 'm2', 2);

c1.addRental(2, m0);
c1.addRental(1, m2);
c1.addRental(5, m1);

console.log(c1.statement);

const result = c1.statement();
console.log(result);

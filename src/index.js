const { Movie, Regular, New, Chidren } = require('./Movie');
const customer = require('./Customer');


const c1 = new customer('c1');
const m0 = new Regular(0, 'm0', 0);
const m1 = new New(1, 'm1', 1);
const m2 = new Chidren(2, 'm2', 2);

c1.addRental(2, m0);
c1.addRental(1, m2);
c1.addRental(5, m1);

console.log(m0);

const result = c1.statement();
console.log(result);

// 如果m0的type 需要变成2？

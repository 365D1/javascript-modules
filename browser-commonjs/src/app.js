let uniq = require('uniq');
let module1 = require('./modules/module1');
let module2 = require('./modules/module2');

console.log(module1);
console.log(module2);

console.log(uniq(module2.arr))

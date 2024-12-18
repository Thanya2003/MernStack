const os= require('os');
const { toASCII } = require('punycode');
var totalmemory = os.totalmem();
var freememory=os.freemem();
console.log(totalmemory+ " "+ freememory);

console.log(`Total Memory ${totalmemory}`);
console.log(`Free Memory ${freememory}`);
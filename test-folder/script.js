const binaryFind = require('binary-package');

const index =  binaryFind.ascend([2, 3, 4, 10, 40],10);

console.log("Element found at", index);
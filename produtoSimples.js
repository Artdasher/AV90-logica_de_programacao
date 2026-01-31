//Insira os 2 dados para calcular o produto:
var input = "32\n54";
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let PROD = A * B;

console.log(`PROD = ${PROD}`);

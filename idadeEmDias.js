var input = prompt(`Insira a quantidade de dias para calcular sua idade: `);
var lines = input.split('\n');

let dias = parseInt(lines.shift());

let ano = Math.floor(dias / 365);
dias %= 365;

let mes = Math.floor(dias / 30);

let dia = dias % 30;

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);
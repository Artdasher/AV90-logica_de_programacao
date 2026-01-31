//insira o número do trabalhador, quantidade de horas trabalhadas
//e o valor das horas trabalhadas para calcular o salário

var input = "3\n140\n5,65";
var lines = input.split('\n');

let numero = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valor = parseFloat(lines.shift());

let salario = horas * valor;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
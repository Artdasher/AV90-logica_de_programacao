var input = prompt(`Insira os dados: `);
var lines = input.split('\n');

let numero = parseInt(lines.Shift());
let horas = parseInt(lines.shift());
let valor = parseFloat(lines.shift());

let salario = horas * valor;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
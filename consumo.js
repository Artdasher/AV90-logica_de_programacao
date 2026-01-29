var input = prompt(`Insira a distância percorrida e o total de combustível gasto para calcular o consumo médio:`);
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift()).toFixed(1);

let consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`)

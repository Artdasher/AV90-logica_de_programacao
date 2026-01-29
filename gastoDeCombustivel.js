var input = prompt(`Insira o tempo e a velocidade para calcular a distância e os litros gastos:`);
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let velocidade = parseInt(lines.shift());

let distancia = tempo * velocidade;
let litros = distancia / 12;

console.log(`${litros.toFixed(3)}`);
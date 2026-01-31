// Simulação de entrada: Distância (X) na primeira linha e Combustível (Y) na segunda
const input = `500
35.0`;

const lines = input.split('\n');

let X = parseInt(lines.shift());

let Y = parseFloat(lines.shift());

let consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);
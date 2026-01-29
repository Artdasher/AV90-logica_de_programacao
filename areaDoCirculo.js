var input = prompt(`Insira o raio do círculo para calcular a área:`);
var lines = input.split('\n');

let n = 3.14159;

let raio = parseFloat(lines.shift()).toFixed(2);

let area = n * (raio * raio);

console.log(`A=${area.toFixed(4)}`);
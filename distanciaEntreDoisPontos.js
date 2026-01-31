//Calcular distancia entre 2 pontos. Insira o valor de x1 - y1 e x2 - y2
var input = `1.0 7.0
5.0 9.0`;
var lines = input.split('\n');

const [x1, y1] = lines.shift().split(" ").map(parseFloat);
const [x2, y2] = lines.shift().split(" ").map(parseFloat);

let distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));

console.log(`${distancia.toFixed(4)}`);
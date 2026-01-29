var input = prompt(`Insira os dados dos pontos:`);
var lines = input.split('\n');

const [x1, y1] = lines.shift().split(" ").map(parseFloat);
const [x2, y2] = lines.shift().split(" ").map(parseFloat);

let distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));

console.log(`${distancia.toFixed(4)}`);
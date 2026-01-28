const input = prompt('Digite três números separados por espaço: ');
const lines = input.split('\n');

const maior = (a,b) => (a + b + Math.abs(a - b)) / 2;
let [a, b, c] = lines[0].shift().split(" ").map((x) => parseInt(x));

let resultado = maior(a, maior(b,c));

console.log(`${resultado} eh o maior`);
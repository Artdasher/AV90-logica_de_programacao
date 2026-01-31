// Digite três números separados por espaço para verificar qual é maior:
const input = "32 54 12";
const lines = input.split('\n');

const maior = (a, b) => (a + b + Math.abs(a - b)) / 2;

let [a, b, c] = lines[0].split(" ").map((x) => parseInt(x));

let resultado = maior(a, maior(b, c));

console.log(`${resultado} eh o maior`);
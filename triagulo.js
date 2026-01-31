// Simulação de entrada (Exemplo: 6.0 4.0 2.0 ou 6.0 4.0 2.1)
const input = "5.3 6.1 5.5";
var lines = input.split('\n');

let valores = lines.shift().split(" ").map(x => parseFloat(x));

let [A, B, C] = valores;

if (A < B + C && B < A + C && C < B + A) {
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
} else {
    console.log(`Area = ${(((A + B) * C) / 2).toFixed(1)}`);
}
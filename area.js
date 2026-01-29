var input = prompt(`Insira os dados para realizar os cálculos:`);
var lines = input.split('\n');

const [A, B, C] = lines.shift().split(" ").map(parseFloat);

let areaTriangulo =(1/2.0) * A * C;

let pi = 3.14159;
let areaCirculo = pi * (C ** 2);

let areaTrapezio = ((A + B) * C) / 2.0;

let areaQuadrado = B * B;

let areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
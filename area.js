const input = "3.0 4.0 5.2"; 

const lines = input.split(/\s+/);

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

let areaTriangulo = (A * C) / 2.0;
let pi = 3.14159;
let areaCirculo = pi * Math.pow(C, 2);
let areaTrapezio = ((A + B) * C) / 2.0;
let areaQuadrado = B * B;
let areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
//Calcula o volume de uma esfera
var input = "35";
var lines = input.split('\n');

let raio = parseFloat(lines.shift());
let pi = 3.14159;

let volume = (4/3.0) * pi * (raio**3);

console.log(`VOLUME = ${volume.toFixed(3)}`);
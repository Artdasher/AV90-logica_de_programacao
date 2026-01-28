var A = prompt("Insira o valor do A:");
var B = prompt("Insira o valor do B:");
var C = prompt("Insira o valor do C:");
var DELTA = (B * B) - (4 * A * C);

if (A === 0 || DELTA < 0){
    console.log(`Impossivel calcular`);
} else {
    var r1 = (-B + Math.sqrt(DELTA)) / (2 * A);
    var r2 = (-B - Math.sqrt(DELTA)) / (2 * A);
    
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}
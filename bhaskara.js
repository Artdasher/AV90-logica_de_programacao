const input = "10.0 20.1 5.1";
const lines = input.split(" ");

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

const DELTA = (B * B) - (4 * A * C);

if (A === 0 || DELTA < 0) {
    console.log("Impossivel calcular");
} else {
    const r1 = (-B + Math.sqrt(DELTA)) / (2 * A);
    const r2 = (-B - Math.sqrt(DELTA)) / (2 * A);
    
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}
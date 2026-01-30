var input = prompt(`Insira o valor inteiro:`);
var lines = input.split('\n');

let N = parseInt(lines.shift());

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(`${N}`);
for (let nota of notas){
    let qtdNotas = Math.floor(N / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    N %= nota
}
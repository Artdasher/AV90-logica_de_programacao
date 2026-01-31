// Simulação da entrada de dados
const input = "576"; 

const lines = input.split('\n');
let N = parseInt(lines.shift());

const valorOriginal = N;

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valorOriginal);

for (let nota of notas) {
    let qtdNotas = Math.floor(N / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    N %= nota;
}
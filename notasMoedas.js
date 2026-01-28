var input = prompt(`Insira o valor total (Ex.: 256.63): `);
var lines = input.split('\n');

let N = parseFloat(lines.shift() * 100);

const notas = [10000, 5000, 2000, 1000, 500, 200];
const moedas = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");
for (let nota of notas){
    let qtdNotas = Math.floor(N / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
N %= nota    
}

console.log("MOEDAS:");
for (let moeda of moedas){
    let qtdMoedas = Math.floor(N / moeda);
    console.log(`${qtdMoedas} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
N %= moeda    
}
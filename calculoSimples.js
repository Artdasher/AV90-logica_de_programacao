const input = `12 1 5.30
16 2 5.10`;

const lines = input.split('\n');

// Processamento do item 1
const linha1 = lines.shift().split(" ");
const id1 = parseInt(linha1[0]);
const qte1 = parseInt(linha1[1]);
const preco1 = parseFloat(linha1[2]);

// Processamento do item 2
const linha2 = lines.shift().split(" ");
const id2 = parseInt(linha2[0]);
const qte2 = parseInt(linha2[1]);
const preco2 = parseFloat(linha2[2]);

const total = (qte1 * preco1) + (qte2 * preco2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
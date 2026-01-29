var input = prompt(`Insira os dados das peças 1 e 2:`);
var lines = input.split('\n');

//peça 1
const linha1 = lines.shift().split(" ");
const qte1 = parseInt(linha1[1]);
const preco1 = parseFloat(linha1[2]);
//peça 2
const linha2 = lines.shift().split(" ");
const qte2 = parseInt(linha2[1]);
const preco2 = parseFloat(linha2[2]);

const total = (qte1 * preco1) + (qte2 * preco2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
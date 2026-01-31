//inserir 1 codigo da tabela abaixo e uma quantidade para saber
//quanto pagará

var input = "3 4";
var lines = input.split('\n');

const [codigo, quantidade] = lines.shift().split(" ").map(Number);
const tabelaPrecos = {
    1: 4.00, // Cachorro Quente
    2: 4.50, // X Salada
    3: 5.00, // X Bacon
    4: 2.00, // Torrada simples
    5: 1.50 // Refrigerante
}

const precoUnitario = tabelaPrecos[codigo];
const total = precoUnitario * quantidade;

console.log(`Total: R$ ${total.toFixed(2)}`);
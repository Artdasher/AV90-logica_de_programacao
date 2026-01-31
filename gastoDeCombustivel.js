// simulanto tempo e velocidade, isira os dois dados
var input = "10\n85"; 
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let velocidade = parseInt(lines.shift());

let distancia = tempo * velocidade;
let litros = distancia / 12; // O carro faz 12km/l

console.log(`${litros.toFixed(3)}`);
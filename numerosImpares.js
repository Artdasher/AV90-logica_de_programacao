//Insira um número para verificar os ímpares:

var input = `43`;
var lines = input.split('\n');

let X = parseInt(lines.shift());
let i = 1
while (i <= X){
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
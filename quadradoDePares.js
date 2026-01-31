//insira um numero para verificar os quadrados dos pares:

var input = "43";
var lines = input.split('\n');

let N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        let quadrado = i * i;
        
        console.log(`${i}^2 = ${quadrado}`);
    }
}
let N = prompt("Insira a quantidade de segundos: ");
let HORA = Math.floor(N / 3600);
N %= 3600; 
let MINUTO = Math.floor(N / 60);
let SEGUNDO = N % 60;


console.log(`${HORA}:${MINUTO}:${SEGUNDO}`);

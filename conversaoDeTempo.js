// Simulação da entrada de dados (Exemplo: 140153 segundos)
const input = "140153"; 

let N = parseInt(input);

let HORA = Math.floor(N / 3600);
N %= 3600;

let MINUTO = Math.floor(N / 60);

let SEGUNDO = N % 60;

console.log(`${HORA}:${MINUTO}:${SEGUNDO}`);
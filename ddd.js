// Insira um número para verificar se é um DDD correspondente com a tabela abaixo:
var input = "27";
var lines = input.split('\n');

let ddd = parseInt(input);

const cidade = {
    61: "Brasilia",
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte"
};

if (cidade[ddd]) {
    console.log(cidade[ddd]);
} else {
    console.log(`DDD nao cadastrado`);
}
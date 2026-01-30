var input = (`Insira um DDD para saber de qual cidade é:`);
var lines = input.split('\n');

let ddd = parseInt(lines.shift());

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
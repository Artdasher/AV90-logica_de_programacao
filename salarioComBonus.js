// troque os valores FIXO e MONTANTE (valor de venda feito) para saber 
// Quanto de comissão + salário irá receber. (15% de comissão)
let NOME = "Thais";
let FIXO = 1700.00;
let MONTANTE = 800.00;

let COMISSAO = MONTANTE * 0.15;
let TOTAL = FIXO + COMISSAO;
console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);
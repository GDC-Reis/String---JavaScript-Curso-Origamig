// Utilizando o foreach no array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    }
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', ''); //'+' antes de uma string que é apenas numero, transforma ela em uma string
    if(item.descricao.slice(0,4) === 'Taxa'){
        taxaTotal += numeroLimpo;
    }else if(item.descricao.slice(0,4) === 'Rece'){
        recebimentoTotal += numeroLimpo;
    }
});


// Retorne um array com a lista abaixo
const transporte = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransporte = transporte.split(';');


//Substitua todos os span's para a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

html = html.split('span').join('a');

// Retorna o último caracter da frase
const frase = 'Melhor do ano!';
frase.charAt(frase.length -1);

// Retorne o total de taxas
let taxasTotal = 0;
const transacao2 = ['Taxa do Banco', '  TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
transacao2.forEach((item) => {
    item = item.toLowerCase();
    item = item.trim();
    item = item.slice(0,4);

    if(item === 'Taxa'){
        taxasTotal++;
    }
})
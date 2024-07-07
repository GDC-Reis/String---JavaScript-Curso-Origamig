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

let valorTaxa = 0;
let valorRecebimento = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');
    if(item.descricao.slice(0,4) === 'Taxa'){
        console.log(valorTaxa += numeroLimpo);
    }else if(item.descricao.slice(0,4) === 'Rece'){
        console.log(valorRecebimento += numeroLimpo);
    }
})
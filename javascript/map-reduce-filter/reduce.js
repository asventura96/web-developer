function somaNumeros(arr) {
    return arr.reduce(function(anterior, atual) {
        return anterior + atual;
    })
}

const arr = [1, 2, 3, 4, 5];

console.log("Soma dos números: ", somaNumeros(arr));


//Saldo de lista de Compras
const listaCompras = [
    {
        nome: 'arroz',
        valor: 21,
    },
    {
        nome: 'feijão',
        valor: 7,
    },
    {
        nome: 'leite',
        valor: 3.78,
    },
];

const saldoDisponivel = 100;

console.log("Saldo inicial: ", saldoDisponivel)

function calculaSaldo(saldoDisponivel, listaCompras) {
    return listaCompras.reduce(function(anterior, atual, indice) {
        console.log('Rodada: ', indice + 1);
        console.log({anterior});
        console.log({atual});
        return anterior - atual.valor;
    }, saldoDisponivel);
}

console.log("Saldo restante: ", calculaSaldo(saldoDisponivel, listaCompras));
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'André',
    idade: 25,
};

const pessoa2 = {
    nome: 'Rafael',
    idade: 24,
};

const animal = {
    nome: 'Thor',
    idade: 2,
    tipo: 'cachorro',
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(pessoa2, [30]));
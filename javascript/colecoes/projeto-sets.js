const meuArray = [2, 2, 5, 10, 15, 15, 15, 22, 22, 22, 30, 45, 60, 65, 65, 70, 99];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));
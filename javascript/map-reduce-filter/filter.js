function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 2, 4, 8, 15, 19, 21, 22, 30];

console.log(filtraPares(meuArray));
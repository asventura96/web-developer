const alfa = {
    value: 10,
}

const beta = {
    value: 20,
}

const nums = [1, 2, 7, 22];

//Função com "this"
function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

console.log('this -> alfa', mapComThis(nums, alfa));
console.log('this -> beta', mapComThis(nums, beta));

//função sem "this"
function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

console.log('Resultado sem this: ', mapSemThis(nums));
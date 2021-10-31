function validaArray(arr, num) {
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros!");

        if(typeof arr !== 'object')
            throw new TypeError("O Array precisa ser do tipo OBJECT.");
    
        if(typeof num !== 'number')
            throw new TypeError("O Number precisa ser do tipo NUMBER.");
    
        if(arr.length !== num)
            throw new RangeError("Tamanho Inválido!");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este é um erro ReferenceError!")
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Este é um erro TypeError!")
            console.log(e.message)
        }else if(e instanceof RangeError) {
            console.log("Este é um erro RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(validaArray([1], 1));
const listaLivros = require("./lista");
const trocaLugar = require('./encontraMenores')

function quickSort(array, left, right){
    if(array.length > 1){
        let indiceAtual = particiona(array, left, right);
        if(left < indiceAtual -1){
            quickSort(array, left, indiceAtual - 1);
        }
        if(indiceAtual < right){
            quickSort(array, indiceAtual, right)
        }
    }
return array;
}   

function particiona(array, left, right){
    let pivo = array[Math.floor((left + right)/2)];
    let atualLeft = left; //0
    let atualRight  = right; //10

        while(atualLeft <= atualRight){
            while(array[atualLeft].preco < pivo.preco) {
                atualLeft++;
        }
            while(array[atualRight].preco > pivo.preco){
                atualRight--;
        }
            if(atualLeft <= atualRight) {
                trocaLugar(array, atualLeft, atualRight);
                atualLeft++
                atualRight--
        }
    }
return atualLeft;
}
console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
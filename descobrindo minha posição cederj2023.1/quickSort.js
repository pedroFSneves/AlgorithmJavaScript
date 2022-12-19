const candidatosNotas = require('./ListaCandidatos');
const trocaLugar = require('./encontraMenores');

//eu cpf: "188.xxx.xxx-09" nome: "pedro"

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
            while(array[atualLeft].notaFinal < pivo.notaFinal) {
                atualLeft++;
        }
            while(array[atualRight].notaFinal > pivo.notaFinal){
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
console.dir(quickSort(candidatosNotas,0,candidatosNotas.length - 1), {'maxArrayLength': null});
//console.log(quickSort(candidatosNotas, 0, candidatosNotas.length - 1));
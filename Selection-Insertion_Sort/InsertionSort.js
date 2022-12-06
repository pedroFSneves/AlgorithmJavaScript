const livros = require('./listaLivros');

function insertionSort(lista){
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){

            let produtoAnalise = lista[analise];
            let produtoAnterior = lista[analise - 1];
        
                lista[analise] = produtoAnterior;
                lista[analise - 1] = produtoAnalise;
                analise --;
        };
    };
    console.log(lista);
};

insertionSort(livros);
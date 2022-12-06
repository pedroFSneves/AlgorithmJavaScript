//const livros = require('./listaLivros');

function menorValor(produto, posiçãoInicial){
    let maisBarato = posiçãoInicial;

    for (let atual = posiçãoInicial; atual < produto.length; atual++){
        if (produto[atual].preco < produto[maisBarato].preco){
            maisBarato = atual;
        };
    };
return maisBarato;
};

module.exports = menorValor;
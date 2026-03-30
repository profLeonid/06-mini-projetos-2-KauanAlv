'use strict'

function estabelecerParcelas (numeroDeParcela) {
    let listaParcela = []

    for (let cont = 1; cont <= numeroDeParcela; cont++){
        listaParcela.push(cont)
    }

    return listaParcela
}

function calcularValorParcela (valor, parcelaQuantidade) {
    let resultado = valor / parcelaQuantidade

    return resultado
}

console.log(estabelecerParcelas(4))
console.log(calcularValorParcela(1000, 4))
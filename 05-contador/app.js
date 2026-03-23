'use strict'

function criarListaNumero(quantidade) {
    let listaNumeros = []

    for (let cont = 1; cont <= quantidade; cont++) {
        listaNumeros.push(cont)
    }

    return listaNumeros
}

console.log(criarListaNumero(2))
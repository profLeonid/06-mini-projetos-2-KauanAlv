'use strict'

function criarListaNumero(quantidade) {
    let listaNumeros = []

    for (let cont = 1; cont <= quantidade; cont++) {
        listaNumeros.push(cont)
    }

    return listaNumeros
}

function contarNumerosPares(quantidade) {
    let listaNumerosPares = []

    for (let cont = 0; cont <= quantidade; cont += 2){
        listaNumerosPares.push(cont)
    }

    return listaNumerosPares
}

console.log(criarListaNumero(2))
console.log(contarNumerosPares(10))
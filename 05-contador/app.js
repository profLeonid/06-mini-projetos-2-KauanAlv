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

    for (let cont = 0; cont <= quantidade; cont += 2) {
        listaNumerosPares.push(cont)
    }

    return listaNumerosPares
}

function contarNumerosImpares(quantidade) {
    let listaNumerosImpares = []

    for (let cont = 0; cont <= quantidade; cont++) {
        if (cont % 2 !== 0)
            listaNumerosImpares.push(cont)
    }

    return listaNumerosImpares
}

console.log(criarListaNumero(2))
console.log(contarNumerosPares(10))
console.log(contarNumerosImpares(10))
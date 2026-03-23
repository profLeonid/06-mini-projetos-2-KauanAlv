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

function contarNumerosMultiplos(quantidade) {
    let listaNumerosMultiplosDeCinco = []

    for (let cont = 0; cont <= quantidade; cont += 5) {
        if (cont % 5 === 0)
            listaNumerosMultiplosDeCinco.push(cont)
    }

    return listaNumerosMultiplosDeCinco
}

function contarPotencia(quantidade) {
    let listaMultiplosDeDois = []

    for (let cont = 0; cont <= quantidade; cont++) {
        listaMultiplosDeDois.push(2 ** cont)
    }

    return listaMultiplosDeDois
}

console.log(criarListaNumero(2))
console.log(contarNumerosPares(10))
console.log(contarNumerosImpares(10))
console.log(contarNumerosMultiplos(10))
console.table(contarPotencia(10))
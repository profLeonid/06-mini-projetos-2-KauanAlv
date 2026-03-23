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

function contarQuadrado(quantidade) {
    let listaMultiplosDeDois = []

    for (let cont = 0; cont <= quantidade; cont++) {
        listaMultiplosDeDois.push(2 ** cont)
    }

    return listaMultiplosDeDois
}

function criarLinha(numero, par, impar, multiploCinco, numeroPontecial) {
    //Aqui ela vai receber 5 números e deve criar na tela a tabela com os 5 números
    //Aqui sim começa o front

}

console.log(criarListaNumero(2))
console.log(contarNumerosPares(10))
console.log(contarNumerosImpares(10))
console.log(contarNumerosMultiplos(10))
console.table(contarQuadrado(10))
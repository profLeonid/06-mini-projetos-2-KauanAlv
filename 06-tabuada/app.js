'use strict'

function calcularSoma (numero) {
    let listaSoma = []

    for (let cont = 1; cont <= 10; cont++) {
        listaSoma.push(numero + cont)
    }

    return listaSoma
}

function calcularSubtracao (numero) {
    let listaSub = []

    for (let cont = 1; cont <= 10; cont++) {
        listaSub.push(numero - cont)
    }

    return listaSub
}

console.log(calcularSoma(5))
console.log(calcularSubtracao(5))
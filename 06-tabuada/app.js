'use strict'

function calcularSoma (numero) {
    let listaSoma = []

    for (let i = 1; i <= 10; i++) {
        listaSoma.push(numero + i)
    }

    return listaSoma
}

console.log(calcularSoma(5))
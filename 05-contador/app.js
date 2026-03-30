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
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    const tdPar = document.createElement('td')
    const tdImpar = document.createElement('td')
    const tdMultCinco = document.createElement('td')
    const tdQuadrado = document.createElement('td')

    tdNum.textContent = numero
    tdPar.textContent = par
    tdImpar.textContent = impar
    tdMultCinco.textContent = multiploCinco
    tdQuadrado.textContent = numeroPontecial

    tr.appendChild(tdNum)
    tr.appendChild(tdPar)
    tr.appendChild(tdImpar)
    tr.appendChild(tdMultCinco)
    tr.appendChild(tdQuadrado)
    tbody.appendChild(tr)
}

function gerarLista() {
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumero(quantidade)
    const listaPar = contarNumerosPares(quantidade)
    const listaImpar = contarNumerosImpares(quantidade)
    const listaMultCinco = contarNumerosMultiplos(quantidade)
    const listaQuadrado = contarQuadrado(quantidade)

    document.getElementById('tbody').replaceChildren()

    for (let numEscolhido = 0; numEscolhido < quantidade; numEscolhido++) {
        criarLinha(listaNumeros[numEscolhido], listaPar[numEscolhido], listaImpar[numEscolhido], listaMultCinco[numEscolhido], listaQuadrado[numEscolhido])
    }
}
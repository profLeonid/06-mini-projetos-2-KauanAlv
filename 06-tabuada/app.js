'use strict'

function definirLista(numero) {
    let lista = []

    for (let cont = 1; cont <= 10; cont++) {
        lista.push(cont)
    }

    return lista
}

function calcularSoma(numero) {
    let listaSoma = []

    for (let cont = 1; cont <= 10; cont++) {
        listaSoma.push(numero + cont)
    }

    return listaSoma
}

function calcularSubtracao(numero) {
    let listaSub = []

    for (let cont = 1; cont <= 10; cont++) {
        listaSub.push(numero - cont)
    }

    return listaSub
}

function calcularMultiplicacao(numero) {
    let listaMult = []

    for (let cont = 1; cont <= 10; cont++) {
        listaMult.push(numero * cont)
    }

    return listaMult
}

function calcularDivisao(numero) {
    let listaDiv = []

    for (let cont = 1; cont <= 10; cont++) {
        listaDiv.push(Number((numero / cont).toFixed(2)))
    }

    return listaDiv
}

function criarLinha(numero, soma, subtracao, multiplicacao, divisao) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    const tdSoma = document.createElement('td')
    const tdSub = document.createElement('td')
    const tdMult = document.createElement('td')
    const tdDiv = document.createElement('td')

    tdNum.textContent = numero
    tdSoma.textContent = soma
    tdSub.textContent = subtracao
    tdMult.textContent = multiplicacao
    tdDiv.textContent = divisao

    tr.appendChild(tdNum)
    tr.appendChild(tdSoma)
    tr.appendChild(tdSub)
    tr.appendChild(tdMult)
    tr.appendChild(tdDiv)
    tbody.appendChild(tr)

    if (subtracao < 0) {
        tdSub.style.color = 'red'
    }
}

function gerarLista() {
    const numero = Number(document.getElementById('numero').value)

    const listaNum = definirLista(numero)
    const listaSoma = calcularSoma(numero)
    const listaSub = calcularSubtracao(numero)
    const listaMult = calcularMultiplicacao(numero)
    const listaDiv = calcularDivisao(numero)

    document.getElementById('tbody').replaceChildren()

    for (let numEscolhido = 0; numEscolhido < 10; numEscolhido++) {
        criarLinha(listaNum[numEscolhido], listaSoma[numEscolhido], listaSub[numEscolhido], listaMult[numEscolhido], listaDiv[numEscolhido])
    }
}
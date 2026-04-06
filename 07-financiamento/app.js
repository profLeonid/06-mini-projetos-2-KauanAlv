'use strict'

function estabelecerParcelas(numeroDeParcela) {
    let listaMeses = []

    for (let cont = 1; cont <= numeroDeParcela; cont++) {
        listaMeses.push(cont)
    }

    return listaMeses
}

const calcularValorParcela = (valor, parcelaQuantidade) => Number(valor / parcelaQuantidade)

function calcularJurosPorMes(saldoDevedor, taxa) {
    let listaJuros = []
    let juros

    for (let cont = 0; cont < saldoDevedor.length; cont++) {
        juros = saldoDevedor[cont] * (taxa / 100)
        listaJuros.push(juros)
    }

    return listaJuros
}

const calcularTotalMensal = (valorParcela, jurosMensal) => Number(valorParcela + jurosMensal)

function calcularSaldoDevedor(parcelas, valor, valorParcela) {
    let saldoDev = []

    for (let cont = 0; cont < parcelas.length; cont++) {
        saldoDev.push(valor)
        valor -= valorParcela
    }

    return saldoDev
}

function criarLinha(mes, parcela, jurosMensal, totalMensal, saldoDevedor) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdMes = document.createElement('td')
    const tdParc = document.createElement('td')
    const tdjurosMensal = document.createElement('td')
    const tdTotalmensal = document.createElement('td')
    const tdSaldoDev = document.createElement('td')

    tdMes.textContent = mes
    tdParc.textContent = `R$ ${parcela.toFixed(2)}`
    tdjurosMensal.textContent = `R$ ${jurosMensal.toFixed(2)}`
    tdTotalmensal.textContent = `R$ ${totalMensal.toFixed(2)}`
    tdSaldoDev.textContent = `R$ ${saldoDevedor.toFixed(2)}`

    tdjurosMensal.style.color = '#f87171'
    tdTotalmensal.style.color = '#facc15'

    tr.appendChild(tdMes)
    tr.appendChild(tdParc)
    tr.appendChild(tdjurosMensal)
    tr.appendChild(tdTotalmensal)
    tr.appendChild(tdSaldoDev)
    tbody.appendChild(tr)
}

function gerarLista() {
    const valor = Number(document.getElementById('valorM').value)
    const taxa = Number(document.getElementById('taxa').value)
    const parcela = Number(document.getElementById('parcela').value)

    const listaMeses = estabelecerParcelas(parcela)
    const valorParcela = calcularValorParcela(valor, parcela)
    const listaSaldoDevedor = calcularSaldoDevedor(listaMeses, valor, valorParcela)
    const listaJuros = calcularJurosPorMes(listaSaldoDevedor, taxa)

    document.getElementById('tbody').replaceChildren()

    for (let cont = 0; cont < listaMeses.length; cont++) {
        let TotalMes = calcularTotalMensal(valorParcela, listaJuros[cont])

        criarLinha(listaMeses[cont], valorParcela, listaJuros[cont], TotalMes, listaSaldoDevedor[cont] - valorParcela)
    }
}
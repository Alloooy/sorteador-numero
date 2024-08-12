function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById('resultado');
    let sorteados = [];

    // Validação das entradas
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        resultado.innerHTML = `<label class="texto__paragrafo">Por favor, insira números válidos.</label>`;
        return;
    }

    if (quantidade <= 0 || de >= ate || quantidade > (ate - de + 1)) {
        resultado.innerHTML = `<label class="texto__paragrafo">Insira uma quantidade válida que esteja dentro do intervalo.</label>`;
        return;
    }

    // Sorteio dos números
    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    alterarStatusBotao(true); // Ativa o botão de reiniciar após o sorteio
} 

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(ativar) {
    let botao = document.getElementById('btn-reiniciar');
    if (ativar) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora</label>';
    alterarStatusBotao(false); // Desativa o botão de reiniciar após o reset
}
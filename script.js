function calcularIdade(anoNascimento) {
    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;
    return idade;
}

function perguntarIdade() {
    const anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"));
    const idade = calcularIdade(anoNascimento);

    if (idade > 17) {
        const painel = document.querySelector(".selecionar-jogo");
        painel.classList.remove("escondido");
    } else {
        const paragrafo = document.querySelector(".aviso");
        paragrafo.innerHTML = `O uso deste site não é permitido para pessoas com ${idade} anos!`;
        paragrafo.classList.add("vermelho");
    }
}

function selecionarJogo(botao) {
    nomeJogo = botao.innerHTML;
    const botaoSelecionadoAntes = document.querySelector(".tipo-jogo .selecionado");

    if(botaoSelecionadoAntes !== null) {
         botaoSelecionadoAntes.classList.remove("selecionado");
     } 
    
     botao.classList.add("selecionado");
}

function selecionarJogadores(botao) {
    qtdJogadores = botao.innerHTML;
    const botaoSelecionadoAntes = document.querySelector(".qtd-jogadores .selecionado");

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado");
    } 
    
    botao.classList.add("selecionado");
}
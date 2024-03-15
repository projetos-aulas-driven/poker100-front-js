function perguntarIdade() {
    const anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"));

    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;

    if (idade > 17) {
        const painel = document.querySelector(".selecionar-jogo");
        painel.classList.remove("escondido");
    } else {
        const paragrafo = document.querySelector(".aviso");
        paragrafo.innerHTML = `O uso deste site não é permitido para pessoas com ${idade} anos!`;
        paragrafo.classList.add("vermelho");
    }
}

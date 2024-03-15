function perguntarIdade() {
    const anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"));

    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;

    alert(idade);
}

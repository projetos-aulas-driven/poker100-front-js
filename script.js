function perguntarIdade() {
    const anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"));

    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;

    alert(idade);

    if (idade > 17) {
        alert("Você pode jogar");
    } else if (idade === 17) {
        alert("Você ainda não pode jogar, mas tá quase!");
    } else {
        alert("Você NÃO pode jogar!");
    }
}

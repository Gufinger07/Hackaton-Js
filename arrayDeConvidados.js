const pessoa = {
    Nome: " ",
    Idade: 0,
    Cpf: 0
}
function criarPessoa(nome, idade, cpf) {
    pessoa.nome = nome
    pessoa.idade = idade
    pessoa.cpf = cpf
}
var nome = prompt("Digite seu nome: ");
var idade = Number(prompt("Digite sua idade: "));
var cpf = Number(prompt("Digite seu cpf: "));

criarPessoa(nome, idade, cpf)
console.log(`Nome: ${pessoa.nome} Idade: ${pessoa.idade} CPF: ${pessoa.cpf}`)
var valorInicial = Number(prompt("Digite o valor inicial"))
var valorFinal = Number(prompt("Digite o valor final"))
var valorIncremento = Number(prompt("Digite o valor do incremento"))
for( var i = valorInicial; i < valorFinal; i += valorIncremento) {
    console.log(Math.log(i))
}


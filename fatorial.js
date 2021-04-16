function calculaFatorial(valor) {
    var fatorial = valor;
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++) {
        resultado *= i;
    }
    console.log(`O resultado do fatorial de ${fatorial} é ${resultado}`)
}
var numero = 6
calculaFatorial(numero)
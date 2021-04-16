var operacao = true
while(operacao == true) {
    var x = prompt("Digite o primeiro número:");
    var y = prompt("Digite o segundo número:");
    if(x === "N" || y === "N") {
        alert("Operação cancelada!!")
        operacao = false
        break
    }
    else {
        var resultado = Number(x) + Number(y);
        alert(`O resultado da soma é ${resultado}`)
    }
}





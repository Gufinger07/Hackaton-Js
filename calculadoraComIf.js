function somarNumeros(x, y) {
    if (x > 10 || y > 10)
        console.log("Valores assustam!")
    else {
        var resultado = x + y
        console.log(`O resultado da soma é ${resultado}`)
    }
}

var x = 1
var y = 3
somarNumeros(x, y)
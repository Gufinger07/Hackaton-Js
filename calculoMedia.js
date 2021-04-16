function calcularNumeros(numeros) {
    var total = numeros.reduce(function(total, numero){
    return total + numero}, 0);
    var media = total / numeros.length
    console.log(media)
}
var numerosParaSomar = [1,2,3,4]
calcularNumeros(numerosParaSomar)


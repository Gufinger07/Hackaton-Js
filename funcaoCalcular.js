function somar(numeros) {
    var total = numeros.reduce(function(total, numero){
    return total + numero}, 0);
    console.log(total)
}
var numerosParaSomar = [1,2,3,4]
somar(numerosParaSomar)

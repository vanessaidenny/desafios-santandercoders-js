/**
 * Desafio - Fatorial
 * Escreva uma função fatorial, que calcule o fatorial de um número.
 */

function fatorial(numero){
    var resultado = 1;
    for(i=1; i<=numero; i++){
        resultado = resultado * i;
    }
    return resultado;
}
fatorial(3);
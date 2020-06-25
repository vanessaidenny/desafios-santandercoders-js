/**
 * Desafio - Mais Menos
 * Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:
 * 
 * na primeira posição, a fração de números que são positivos
 * na segunda posição, a fração de números que são zero
 * na última posição, a fração de números que são negativos
 * 
 * Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25],
 * devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.
 * 
 * Escreva a função maisMenos.
 */

function maisMenos(lista){
    var resultado = [];
    var contPositivo = 0;
    var contIgual = 0;
    var contNegativo = 0;
    for (var i=0; i<lista.length; i++){
        if (lista[i]>0){
            contPositivo++;
        }
        if (lista[i]==0){
            contIgual++;
        }
        if (lista[i]<0){
            contNegativo++;
        }
    }
    var total = contPositivo+contIgual+contNegativo;
    resultado.push(contPositivo/total);
    resultado.push(contIgual/total);
    resultado.push(contNegativo/total);
    return resultado;
}

document.write(maisMenos([1, 2, 0, -1]));
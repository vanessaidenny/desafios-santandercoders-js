/**
 * Desafio - Produto
 * Necessitamos uma função produto que receba um array de números e retorne o produto:
 * o resultado de multiplicar todos os elementos entre si.
 * Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.
 * Escreva a função produto
 */

function produto(elemento) {
    var resultado = 1;
    var produto = 0;
    for (var i=0; i<elemento.length; i++) {
        produto = elemento[i];
        resultado = resultado * produto;
    }
    return resultado;
}
produto([1, 4, 7]);
/**
 * Desafio - Árvore utópica
 * As árvores utópicas  crescem de uma forma particular, em dois ciclos:
 * 
 * cada primavera dobram seu tamanho
 * cada verão crescem um metro
 * Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?
 * 
 * Alguns exemplos:
 * 
 * si N = 0, sua altura será 1 metro (não cresceu nada)
 * si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
 * si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
 * si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
 * 
 * E assim ...
 * Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento,
 * e retorne a altura resultante da árvore de Laura.
 */

function alturaArvoreUtopica(n){
    var altura = 0;
    for(var i=0; i<=n; i++){
        if (i==0 || i%2==0) {
            altura++;
        }
        else {
            altura*=2;
        }
    }
    return altura;
}

document.write(alturaArvoreUtopica(0));
document.write(alturaArvoreUtopica(1));
document.write(alturaArvoreUtopica(2));
document.write(alturaArvoreUtopica(3));
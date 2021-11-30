//baby steps
//adicionar o array:
let fruits = [3,4,10,1,12];
//criar uma varável com o valor 0:
let sum = 0;
//criar um loop que percorre o array:
for(let index = 0; index < fruits.length; index +=1){
    //incrementar a variável com o valor correspondente a cada loop:
    sum += fruits[index];
}
//criar um if com a condição da variável ser maior que 15:
if(sum > 15){
    //caso a variável obedeça a condição: imprimir a variável:
    console.log(sum);
//caso não obedeça a condição: 
} else{
    console.log('valor menor que 16')
    }
let numbers = [5,9,3,19,70,8,100,2,35,27];

//Imprimir todos os valores do array number:
/*for(let num of numbers){
    console.log(num)
}
//Outra forma:
let num2;

for(i = 0; i < numbers.length; i+= 1){
    num2 = numbers[i];
    console.log(soma)
}
*/

//Soma de todos os arrays da variavel numbers:
//Depois fazer a média aritmética:
//Fazer if/else:
/*let soma = 0;
let resultado;

for(i = 0; i < numbers.length; i+= 1){
    soma += numbers[i];
    resultado = soma/ numbers.length;
}
console.log(resultado);

if(resultado > 20){
    console.log("valor maior que 20");
} else if (resultado <= 20){
    console.log("valor menor ou igual a 20");
} else{

}*/

//Qual o maior valor no array numbers:
/*let maiorNum = numbers[0];

for(i = 1; i < numbers.length; i += 1){
    if(numbers[i] > maiorNum){
        maiorNum = numbers[i];
    }
}
console.log(maiorNum);*/

//Quantos valores impares existem no array:
/*let numImpar = 0;
for(i = 0; i < numbers.length; i+= 1){
    if(numbers[i] % 2 == 1){
        numImpar += 1;
    } else if(numbers == 0){
        console.log("nenhum valor ímpar");
    } else{

    }
}
console.log(numImpar);
//Descubra o menor número:
let menorNum = numbers[0];

for(i = 1; i < numbers.length; i += 1){
    if(numbers[i] < menorNum){
        menorNum = numbers[i];
    }
}
console.log(menorNum);*/
//Utilizando o for crie um array de 1 até 25:
let res = [];
let resDivisao = [];

for(let cc = 1; cc <= 25; cc+= 1){
     res.push(cc);
}

console.log(res);

for(let i = 0; i < res.length; i += 1){
    resDivisao.push(res[i] / 2);
    
}
console.log(resDivisao);
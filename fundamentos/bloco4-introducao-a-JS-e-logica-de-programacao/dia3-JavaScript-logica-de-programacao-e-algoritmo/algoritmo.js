//Exercicio bonus 1: fazer um quadrado com altura e largura 5.
/*let n = 5;
let simbolo = '*';
let linhas = ' ';

for(let cc = 0; cc < n; cc += 1){
    linhas = linhas + simbolo;
}
for(let cc = 0; cc < n; cc+= 1){
    console.log(linhas);
}*/

//Exercicio bonus 2: imprima um triângulo retângulo com 5 asteriscos de base.
/*let base = 5;
let simbolo = '*';
let linhas = '';

for(cc = 0; cc <= base; cc += 1){
    console.log(linhas);
    linhas = linhas + simbolo;
}*/

//Exercicio bonus 3 = inverta o lado do triângulo retângulo com 5 asteriscos de base.
/*let base = 5;
let simbolo = '*';
let linhas = '';
let posicao = base;

for(let linhaCont = 0; linhaCont <= base; linhaCont += 1){
    for(let colunaCont = 0; colunaCont <= base; colunaCont += 1){
        if(colunaCont < posicao){
            linhas += '';
        }else{
            linhas += simbolo;
        }
    }
    console.log(linhas);
    linhas = '';
    posicao = posicao - 1;
}*/

//Exercicio bonus 4: faça uma pirâmide com n asteriscos de base.
/*let base = 5;
let simbolo = '*';
let linhas = '';
let meioPir = 3; //(base + 1)/2
let ladoEsq = meioPir;
let ladoDir = meioPir;

for(let linhaCont = 0; linhaCont <= meioPir; linhaCont += 1){
    for(let colunaCont = 0; colunaCont <= base; colunaCont += 1){
        if(colunaCont > ladoEsq && colunaCont < ladoDir){
            linhas = linhas + simbolo;
        }else{
            linhas = linhas + " ";
        }
    }
    console.log(linhas);
    linhas = '';
    ladoDir += 1;
    ladoEsq -= 1;
}*/

/*Exercicio bonus 5: Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
 Assuma que o valor de n será sempre ímpar:*/

 let n = 7;
 let simbolo = '*';
 let linhas = '';
 let meioPir = 4; //(n + 1)/2
 let ladoEsq = meioPir;
 let ladoDir = meioPir;
 
 for(let linhaCont = 1; linhaCont <= meioPir; linhaCont += 1){
    linhas = ""; 
    for(let colunaCont = 1; colunaCont <= n; colunaCont += 1){
         if(colunaCont == ladoEsq || colunaCont == ladoDir || linhaCont == meioPir){
             linhas = linhas + simbolo;
         }else{
             linhas = linhas + " ";
         }
     }
    
     console.log(linhas);
     ladoDir += 1;
     ladoEsq -= 1;
 }

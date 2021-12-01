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
let base = 5;
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
}


/*let n = 7;

for(cc = 0; cc <= 7; cc += 1){
    if(cc === 1){
        console.log("  " + "*" + "  ");
    }
    if(cc === 1){
        console.log(" " + "*" + " " + "*" + " ");
    }if(cc === 3){
        console.log(" " + "*" + "  " + "*" + " ");
    }else if(cc === 5){
        console.log("*******");
    }
}*/

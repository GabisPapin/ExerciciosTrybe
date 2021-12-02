//Parte 1 - Objetos e For/In
let info = {
    personagem: 'Padmé',
    origem: 'Star Wars: episode I, II, III',
    nota: 'rainha/ senadora de 3 filmes de Star Wars'
}

/*1. Imprima no console uma mensagem de boas-vindas para a personagem acima,
incluindo seu nome. Valor esperado no console:*/
console.log('Bem-vinda, ' + info.personagem + '!');

/*2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente'
e o valor 'Sim', e emprima o objeto no console:*/
info['recorrente'] = 'Sim';
for(let key in info){
    console.log(key, info[key]);
}

//3. Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for(let key in info){
    console.log(key);
}

/*4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
 Valor esperado no console:*/
 for(let key in info){
     console.log(info[key]);
 }

//5. defina um segundo objeto com as mesmas chaves do primeiro com outros valores:
let info2 = {
    personagem: 'Leia',
    origem: 'Star Wars: Episode IV, V, VI',
    nota: 'princesa/ filha de Padmé Amdala e Anakin Skywalker',
    recorrente: 'Sim'
}

console.log(info['personagem'] + " e " + info2['personagem']);
console.log(info['origem'] + " e " + info2['origem']);
console.log(info['nota'] + " e " + info2['nota']);
console.log(info['recorrente'] + " e " + info2['recorrente']);




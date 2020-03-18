var nomes = ["João", "Maria", "Pedro", "Ana"]

console.log(nomes);

//remove a primeira posição do array
//o oposto dessa função é a unshift
var shift = nomes.shift();

console.log("shift " + shift);
console.log(nomes);

//remove a última posição do array
//o oposto desse função é a push
var pop = nomes.pop();

console.log("pop " + pop);
console.log(nomes);


var posicao = nomes.indexOf("Pedro");


//quando não encontra a posição do elemento no array retorna -1
console.log(posicao);

//array bidimensional
var pessoasIdade = [
    ["Maria", 21],
    ["João", 45],
    ["Ana", 39],
    ["Pedro", 8]
];

console.log(pessoasIdade[0][0]);

//splice e slice
//splice - substituiu o array original
//slice - estrai uma parte do array sem alterar o array original


nomes = ["João", "Maria", "Pedro", "Ana"];

console.log("original: " + nomes);

var splice = nomes.splice(2, "Matheus", "Joana", "Rafaela");

console.log("pós splice: " + nomes);
console.log("splice: " + splice);


var slice = nomes.slice(2, 5);
console.log("pós slice: " + nomes);
console.log("slice: " + slice);

//forEach()

/*
Sintaxe
array.forEach(funcao([valorAtual, índice, array]), argumentoThis)

Parâmetros
funcao() é a função a ser executada para cada elemento do array. Pode receber três parâmetros:

- valorAtual é o valor da posição atual sendo percorrida no array. Parâmetro obrigatório na declaração a função.
- índice é a posição do array que está sendo lida. Parâmetro opcional da função.
- array é o array a ser percorrido no forEach().Parâmetro opcional da função.

argumentoThis valor opcional a ser usado como this no momento que executar a função de callback. Parâmetro opcional do forEach().*/


nomes.forEach(function(nomeAtual, index) {
    console.log("Nome: " + nomeAtual + "\nÍndice: " + index);
})


//map()
//O método map() é invocado a partir de um array e recebe como parâmetro uma função de callback, que é invocada para cada item e retorna o valor do item equivalente no array resultante. 


var nomesMaisculos = nomes.map(function(nomeAtual) {
    var maiusculos = nomeAtual.toUpperCase();
    return maiusculos;
})

console.log(nomesMaisculos);
console.log(nomes);

//filter()

var nomesCom5Letras = nomes.filter(elemento => { return elemento.length == 5 });

console.log(nomesCom5Letras);

//find()
//retorna o primeiro elemento que atende a condição passada

var nomesCom5Letras = nomes.find(elemento => { return elemento.length == 5 });

console.log(nomesCom5Letras);
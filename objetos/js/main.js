//criação de objetos

var pessoa = {
    nome: "Ana",
    idade: 28,
    dataNascimento: "1991-03-28"
}

console.log(pessoa["idade"]);

//array de objetos
var pessoas = [
    { nome: "Pedro", idade: 25 },
    { nome: "Catarina", idade: 90 },
    { nome: "Renato", idade: 15 },
    { nome: "Letícia", idade: 21 },
];

pessoas.forEach(pessoas => {
    alert(pessoas.nome + " tem " + pessoas.idade + " anos.");
})

//alert("Primeiro nome: " + pessoas[0].nome);

//objetos aninhados

var veiculo = {
    placa: "ZXV8597",
    dono: "Rafaela Diniz Andrade",
    tipo: {
        tipoVeiculo: "Carro"
    },
    estado: function() {
        alert("Veículo de placa " + this.placa + " está em movimento!")
    }
}

alert("Tipo de veículo: " + veiculo.tipo.tipoVeiculo + "\nDono: " + veiculo.dono + "\nPlaca: " + veiculo.placa);
veiculo.estado();
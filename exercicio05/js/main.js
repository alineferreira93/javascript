var sair = false;

var espaconave = {
    nome: prompt("Informe o nome da Nave: "),
    tipo: prompt("Informe o tipo da nave: "),
    velocidadeMaxima: prompt("Informe a velocidade máxima que a nave poderá atingir: "),
    velocidade: 0,
    acelerar: function() {

        console.log(this.velocidade);
        var incrementaVelocidade = prompt("Informe o quanto deseja acelerar:");

        console.log("Velocidade informada: " + incrementaVelocidade);
        console.log("Velocidade máxima: " + espaconave.velocidadeMaxima);

        if ((this.velocidade + parseInt(incrementaVelocidade)) <= this.velocidadeMaxima) {
            this.velocidade += parseInt(incrementaVelocidade);
            console.log(this.velocidade);
        } else {
            console.log("Atingiu a velocidade máxima com: " + this.velocidade);
            alert("Velocidade máxima atingida!");
            espaconave.parar();
        }


    },
    parar: function() {
        sair = true;
        alert("Nome: " + this.nome + "\nTipo: " + this.tipo + "\nVelocidade atual: " + this.velocidade);

    }
}

function validacao(opcao) {

    while ((opcao != 1) && (opcao != 2)) {

        alert("A opção escolhida é inválida. Escolha uma das opções válidas.");

        opcao = prompt("Selecione a opção desejada \n 1 - Acelerar a Nave \n 2 - Parar");

    }

}

function exibeMenu() {

    while (sair == false) {

        opcao = prompt("Selecione a opção desejada \n 1 - Acelerar a Nave \n 2 - Parar");

        validacao(opcao)

        if (opcao == 1) {
            espaconave.acelerar();
        }

        if (opcao == 2) {
            espaconave.parar();

        }

    }


}

exibeMenu();
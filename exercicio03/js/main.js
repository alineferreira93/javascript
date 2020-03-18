var nomeNave;

var velocidade = 0;

var opcao

function acelerar() {

    velocidade += 5;

}

function desacelerar() {

    if (velocidade > 0) {
        velocidade -= 5;
    }

}

function imprimir() {
    alert("Nave: " + nomeNave + "\nVelocidade atual: " + velocidade);

}

function validacao(opcao) {

    while ((opcao != 1) && (opcao != 2) && (opcao != 3) && (opcao != 4)) {

        alert("A opção escolhida é inválida. Escolha uma das opções válidas.");

        opcao = prompt("Selecione a opção desejada \n 1 - Acelerar a Nave \n 2 - Desacelerar em 5km/s \n 3 - Imprimir Dados de Bordo \n 4 - Sair");

    }

}

function exibeMenu() {

    opcao = prompt("Selecione a opção desejada \n 1 - Acelerar a Nave \n 2 - Desacelerar \n 3 - Imprimir Dados de Bordo \n 4 - Sair");

    validacao(opcao)

    while (opcao != 4) {

        if (opcao == 1) {
            acelerar();
        }

        if (opcao == 2) {
            desacelerar();
        }

        if (opcao == 3) {
            imprimir();
        }

        opcao = prompt("Selecione a opção desejada \n 1 - Acelerar a Nave \n 2 - Desacelerar em 5km/s \n 3 - Imprimir Dados de Bordo \n 4 - Sair");

        validacao(opcao)

    }


}

nomeNave = prompt("Nome da nave");
exibeMenu();
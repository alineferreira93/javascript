var sair = false;

class naves {
    constructor(nome, qtdTripulantes) {
        this.nome = nome;
        this.qtdTripulantes = qtdTripulantes;
        this.engatada = false;
        this.portaAberta = false;
    }

    realizarEngate() {
        this.engatada = true;
        this.portaAberta = true;
    }
}

var arrayNaves = new Array();

function validacao(opcao) {

    while ((opcao != 1) && (opcao != 2) && (opcao != 3)) {

        alert("A opção escolhida é inválida. Escolha uma das opções válidas.");

        opcao = prompt("Selecione a opção desejada \n1 - Realizar Engate \n2 - Imprimir Naves\n3 - Sair");

    }

}

function exibeMenu() {

    while (sair == false) {

        opcao = prompt("Selecione a opção desejada \n1 - Realizar Engate \n2 - Imprimir Naves\n3 - Sair");

        validacao(opcao)

        if (opcao == 1) {

            var nave = new naves(prompt("Nome da nave: "), prompt("Número de tripulantes: "));
            nave.realizarEngate();
            arrayNaves.push(nave);
            console.log(arrayNaves);
        }

        if (opcao == 2) {

            arrayNaves.forEach(arrayNaves => {
                alert("Naves: " + arrayNaves.nome);
            })

        }

        if (opcao == 3) {
            sair = true;

        }

    }


}

exibeMenu();
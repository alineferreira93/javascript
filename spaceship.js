class SpaceshipNew {
    constructor(nome, cargaAtual, capacidadeMaxima) {
        this.nome = nome;
        this.cargaAtual = cargaAtual;
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtualPercent = 0;

    }

    calculaPercentual() {
        this.cargaAtualPercent = (this.cargaAtual * 100) / this.capacidadeMaxima;
        return this.cargaAtualPercent;

    }

    checaCombustivel() {
        var result = this.calculaPercentual();
        return new Promise(function (resolve, reject) {
            if (result > 30) {
                resolve(result);
            } else {
                reject(result);
            }
        })
    }

    ligar() {
        this.checaCombustivel().then(result => {
            console.log(`(${this.nome}) Partida autorizada: carga atual em ${result}%.`)
        }).catch(result => {
            console.log(`(${this.nome}) Partida não autorizada: carga em apenas ${result}%.`)
        })
    }




}


const sophia = new SpaceshipNew("Sophia", 5, 10);
sophia.ligar();





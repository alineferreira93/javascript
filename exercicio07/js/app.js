class App {
    constructor(){
        this.spaceship = null;
    }

    start() {
        this.enrollSpaceship();
        var choseOption;

        do{
            choseOption = this.showInitialMenu();
            this.redirectFeature(choseOption);
        }while(choseOption != "3")
        this.printAndExit();
    }

    enrollSpaceship(){
        var spaceshipName = prompt("Qual o nome da nave?");
        var crewQuantity = prompt("Qual a quantidade de tripulantes?");
        var spaceshipKind = this.aksForSpaceshipKind();

        if (spaceshipKind == '1') {
            var weaponsQuantity = prompt("Quantas armas a nave possui?");
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity);
        }else{
            var weaponsQuantity = prompt("Quantos lugares a nave possui?");
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, weaponsQuantity);
        }
    }

    aksForSpaceshipKind(){
        var choseOption;
        
        while(!["1","2"].includes(choseOption)){
            choseOption = prompt("Qual o tipo de nave? \n1 - Batalha\n2 - Transporte");
        }
    
        return choseOption;
    }
    
    showInitialMenu(){
        const promptMessage = "O que você seja fazer?\n1 - Acelerara nave\n2 - Trocar a nave\n3 - Imprimir e sair";
        var choseOption = prompt(promptMessage);
        while(!["1","2","3"].includes(choseOption)){
            choseOption = prompt(promptMessage);
        }

        return choseOption;
    }

    redirectFeature(choseOption){
        switch(choseOption){
            case "1":
                this.accelerateSpacheship();
                break;
            case "2":
                this.enrollSpaceship();
                break;    
        }
    }

    accelerateSpacheship(){
        var acceleration = Number(prompt("Quanto gostaria de acelerar?"));
        this.spaceship.speedUp(acceleration);
    }

    printAndExit(){
        var finalMessage = "Nome: " + this.spaceship.name + "\nQuantidade de tripulantes: " + this.spaceship.crewQuantity +
                            "\nVelocidade atual: " + this.spaceship.currentVelocity + "\n";
        alert(finalMessage);                    

    }

}





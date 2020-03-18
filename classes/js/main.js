//criação de classes

class SpacialStation {

    //construtor
    constructor(name, platformsQuantity) {
        this.name = name;
        this.platformsQuantity = platformsQuantity;
        this.velocity = 0;
    }

    speedUp(acceleration) {
        this.velocity += acceleration;

        return this.velocity
    }

}

var observatory = new SpacialStation("Observatório", 40);

alert(observatory.speedUp(100));

alert(observatory.name + "\n" +
    observatory.platformsQuantity);


//associação de classes

class Captain {
    constructor(name, age, flightHours) {
        this.name = name;
        this.age = age;
        this.flightHours = flightHours;
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.captain = new Captain(captainName, captainAge, captainFlightHours);
    }
}

var spaceship = new Spaceship("Artemis", 13, "Will Grey", 45, 15000);

console.log(spaceship);


//herança

class Spaceship2 {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration;
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos à nave.");
        }
    }
}

class BattleSpaceship extends Spaceship2 {
    stop() {
        this.currentVelocity = 0;
        alert("Recolhendo armas e parando nave de batalha");
    }
}

class DiscoverySpaceship extends Spaceship2 {
    stop() {
        this.currentVelocity = 0;
        alert("Recolhendo equipamentos e parando descobertas.");
    }

    //exemplo de sobrescrita de método
    speedUp(){
        alert("A velocidada será aumentada em 1km/s");
        this.currentVelocity +=1;
    }
}

var atena = new DiscoverySpaceship("Atena", 10, 200);
var ares = new BattleSpaceship("Ares", 8, 240);

console.log(ares);
console.log(atena);

atena.speedUp();

class TransportSpaceship extends Spaceship2{
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight, currentAcceleration){
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight;
        this.currentAcceleration = currentAcceleration;
    }

    speedUp(acceleration){
        acceleration /= 2;
        alert("Incrementando velocidade em "+acceleration+ "km/s");
        super.speedUp(acceleration);
    }

    //set
    set acceleration(newAcceleration){
        this.currentAcceleration = newAcceleration;
    }

    //get
    get currentAccelerationTransportSpaceship(){
        return this.currentAcceleration;
    }

    //metódo estático
    static calculateMaxVelocity(){
        if (this.maxCrew > 5) {
            return 200;
        }
        else{
            return 300;
        }
    }

}

var transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400, 100);

console.log(transportSpaceship);

transportSpaceship.speedUp(300);

//get e set

transportSpaceship.acceleration = 200;

console.log(transportSpaceship);

console.log(transportSpaceship.currentAccelerationTransportSpaceship);

//métodos estáticos
//quando há um método estático não é possível chamá-lo através do objeto, é preciso chamá-lo através da classe

var velocityForCrew = TransportSpaceship.calculateMaxVelocity();

console.log(velocityForCrew);


//variáveis estáticas - estão associadas as classes e não aos objetos. sendo assim seus valores não mudam de acordo com os parametros do objeto
// declaração: static get nomeDaVariavel(){}


//exceções


class SpaceshipWeapon{
    constructor(identifier){
        this.identifier = identifier;
        this.shotsLeft = 5;
    }

    shoot(){
        if(this.shotsLeft > 0){
            console.log("Bang!");
            this.shotsLeft -= 1;
        }else{
            //tratamento de exceção
            throw new Error("Arma " + this.identifier + " sem munição");
        }
    }

    reload(){
        this.shotsLeft = 5;
    }
}

var aresWeapon = new SpaceshipWeapon(10);

try{
    aresWeapon.shoot();
    aresWeapon.shoot();
    aresWeapon.shoot();
    aresWeapon.shoot();
    aresWeapon.shoot();
}catch(e){
    console.log(e.message);
    aresWeapon.reload();
}

console.log(aresWeapon);

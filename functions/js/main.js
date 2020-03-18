/* 
- Exemplo de arrow function 

const doubleVelocity = (velocity) => {
    return velocity * 2;
}

- Outras Formas de Declaração

const doubleVelocity = (velocity) => velocity * 2;

const doubleVelocity = velocity => velocity * 2;

console.log(doubleVelocity(10)); 


/*--------------------------------------------------------------------------------------------*/

//high order functions -> São funções que recebem ou retornam outras funções
//a função que é enviada como parâmetro da HOF é chamada de callback

function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity");
    var newVelocity = velocity * 2;
    printer(newVelocity);
    return newVelocity;
}

var printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + "km/s");
}

doubleVelocity(100, printVelocity);
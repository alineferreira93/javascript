const hitchedSpacesShips = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

//retorna os elementos que possuem mais de 9 tripulantes, bem como seu nome
var crewGreaterThan9 = hitchedSpacesShips.filter(spaceship => {
    return spaceship[1] > 9;
}).map(spaceship => {
    return spaceship[0];
});

//retorna as naves cujo processo de engate ainda não está concluído
var ongoingHitchPlatform = hitchedSpacesShips.findIndex(spaceship => {
    return spaceship[2] == false
});

//retorna os nomes das naves em maiusculas
var highlightedSpaceships = hitchedSpacesShips.map(spaceship => {
    return spaceship[0].toUpperCase();
});

var message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ");
message += "\nPlataforma com proceso de engate: " + ongoingHitchPlatform + 1;
message += "\nEspaçovanes destacadas: " + highlightedSpaceships.join(", ");

alert(message);
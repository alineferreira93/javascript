var dataPartidaInf = prompt("Informe a data da partida (YYYY/MM/DD)");

var dataPartida = new Date(dataPartidaInf);
console.log(dataPartida);

var dataAtual = new Date();
console.log(dataAtual);

var dataDif = new Date(Math.abs(dataAtual.getTime() - dataPartida.getTime()));

var opcao = prompt("Exibição do tempo\n 1 - Segundos\n 2 - Minutos\n 3 - Horas\n 4 - Dias");

if (opcao == "1") {
    var segundos = Math.round(dataDif / 1000);
    alert("Tempo de vôo:" + segundos + "segundos");
} else if (opcao == "2") {
    var minutos = Math.round(dataDif / 1000 / 60);
    alert("Tempo de vôo:" + minutos + "minutos");
} else if (opcao == "3") {
    var horas = Math.round(dataDif / 3600);
    alert("Tempo de vôo:" + horas + "horas");
} else if (opcao == "4") {
    var dias = Math.round(dataDif / (1000 * 60 * 60 * 24));
    alert("Tempo de vôo:" + dias + "dias");
}
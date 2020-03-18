function showInfo(){
    var nome = document.querySelector("input[name='nome']").value;
    var corFavorita = document.querySelector("select[name='cor'] option:checked").text; //option:checked -> opção selecionada
    var gostaDeProgramar = document.querySelector("input[name='gosta-de-programar']:checked").value;
    var opcoesDev = document.querySelectorAll("input[name='opcoes-dev']:checked");
    var opcoes = [];

    //insere os elementos selecionados no array de opcoes
    opcoesDev.forEach(element => { opcoes.push(element.value)});
    var opcoesSelecionadas = opcoes.join(", ");
    alert("Nome: "+ nome + "\nCor primária: " + corFavorita + "\nGosta de programar? " + gostaDeProgramar + "\nConhecimentos em programação web: "+ opcoesSelecionadas);

}
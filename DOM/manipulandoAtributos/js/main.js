function verifyEnablement(){
    valorSelecionado = document.querySelector("select").value;

    /*verifica se o valor selecionado é "habilitado" ou "desalibitado", 
      caso seja desabilitado exibe uma mensagem com o fundo vermelho e desabilita o campo de texto,
      caso contrário reabilita o campo texto e não exibe mensagem*/

    if(valorSelecionado == "disabled"){
        document.querySelector("input[name='some-text']").disabled = true;
        var p = document.getElementById("message");
        p.innerText = "DESABILITADO";
        p.style.color = "white";
        p.style.backgroundColor = "red";
    }else{
        document.querySelector("input[name='some-text']").disabled = false;
        var p = document.getElementById("message");
        p.innerText = "";
        p.style.color = "black";
        p.style.backgroundColor = "transparent";
    }
}
function adicionar(){
    var area = document.querySelector("input[name='area']").value;
    var numero = document.querySelector("input[name='numero']").value;
    var bairro = document.querySelector("input[name='bairro']").value;
    var cidade = document.querySelector("input[name='cidade']").value;

    var newListValue = document.createElement("li");
    newListValue.innerText = area + "m², número " + numero + " (" + bairro + "-" + cidade + ")";

    var botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.innerText = "Remover";
    botaoRemover.setAttribute("onclick", "removerCasa(this)");

    newListValue.appendChild(botaoRemover);
    document.getElementById("lista").appendChild(newListValue);
}

function removerCasa(button){
    var removerLi = button.parentNode;
    document.getElementById("lista").removeChild(removerLi);
}
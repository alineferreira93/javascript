class App {
    adicionar() {
        event.preventDefault();
        var tipo = document.querySelector("select[name='tipoImovel'] option:checked").value;
        var area = document.querySelector("input[name='area']").value;
        var alugado = document.querySelector("input[name='alugado']:checked").value;

        console.log(tipo);
        console.log(area);
        console.log(alugado);
        
        var imovel = new Imovel(tipo, area, alugado);
        var listaImoveis = document.createElement("li");

        document.getElementById("imoveisCadastrados").style.listStyleType = "none";
        console.log(imovel.alugado)
        if (imovel.alugado == "sim") {
            var alugadoSim = document.createElement("span");
            alugadoSim.style.backgroundColor = "red";
            alugadoSim.style.color = "white";
            alugadoSim.innerText = "ALUGADO";
            listaImoveis.appendChild(alugadoSim);
        }

        console.log(alugadoSim);

        listaImoveis.innerHTML += " Tipo: " + imovel.tipo + " / Área: " + imovel.area + " m² ";


        var botaoRemover = document.createElement("button");
        botaoRemover.type = "button";
        botaoRemover.innerText = "Remover";
        botaoRemover.setAttribute("onclick", "app.remover(this)");

        listaImoveis.appendChild(botaoRemover);

        document.getElementById("imoveisCadastrados").appendChild(listaImoveis);

        //this.limparForm();
    }

    remover(button) {
        var removerLi = button.parentNode;
        document.getElementById("imoveisCadastrados").removeChild(removerLi);
    }

    limparForm() {
        document.querySelector("input[name='area']").value = "";
        
    }

}
function save(){
    event.preventDefault(); //impede que a página seja recarregada
    var nome = document.querySelector("input[name='name']").value;
    var linguagemProgramacao = document.querySelector("select[name='programming-lang'] option:checked").text;
    alert("Nome: " + nome + "\nPrograma em: " + linguagemProgramacao);
}
/*function clickMe(){
    console.log("Clicado");
}

function focusMe(){
    console.log("Focado");
}

function blurMe(){
    console.log("Desfocado");
}

function changeMe(){
    console.log("Alterado");
}

function overMe(){
    console.log("Mouse aqui");
}*/

function showById(){
    var element = document.getElementById("nome");
    alert(element.value);
}

function showByQuery(){
    var element = document.querySelectorAll("div#telefones input[name='telefone']");
    console.log(element);
}

function showByTagName(){
    var element = document.getElementsByTagName("input");
    console.log(element);
}
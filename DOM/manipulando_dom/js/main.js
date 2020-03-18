function addNewPhone(){

    //seleciona o nó a ser manipulado
    const phoneForm = document.querySelector("form#phones");

    //clona o nó informado
    const newPhone = phoneForm.children[0].cloneNode(true);

    //incrementa a posição do nó
    const phonePosition = phoneForm.children.length + 1;

    //cria a label do novo nó
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": ";

    //anexa o nó como último filho de um outro nó
    phoneForm.appendChild(newPhone);
}

function printPhones(){
    var message = "";
    const phone = document.querySelectorAll("input[name='phone']");
    phone.forEach((phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n";
    }) 

    alert(message);
}
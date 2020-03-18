function doChange(){
    alert(event.target.value);
}


var sampleInput = document.querySelector("input[name='texto']")
sampleInput.addEventListener("change", doChange)

//outra forma 
var changeEvent = new Event("change")
sampleInput.dispatchEvent(changeEvent)

//remove o evento
sampleInput.removeEventListener("change", doChange)

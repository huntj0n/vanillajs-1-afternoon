console.log('the house always wins!')

let idInput = document.getElementById('idInput');
console.log(idInput)
let colorInput = document.getElementById('colorInput');
console.log(colorInput);

function setCard(){
    let card = document.getElementById(idInput.value);
    console.log(card);
    card.style.color = colorInput.value;
}
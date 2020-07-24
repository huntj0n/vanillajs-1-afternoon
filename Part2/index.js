console.log('the house always wins!')

const idInput = document.getElementById('idInput');
console.log(idInput)
const colorInput = document.getElementById('colorInput');
console.log(colorInput);

function setCard(){
    let card = document.getElementById(idInput.value);
    console.log(card);
    card.style.color = colorInput.value;
}
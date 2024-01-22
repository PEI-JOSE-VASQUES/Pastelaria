var dados = localStorage.getItem('chave');
var sabor = localStorage.getItem('sabor');
var im1 = document.getElementById('fundo1');
var im2 = document.getElementById('fundo2');
var im3 = document.getElementById('fundo3');

function handleSelectChange(event) {
    var selectedOption = event.target.value;
    
    if (event.target.id === "ps1") {
        updateImage(im1, selectedOption);
    }
    if (event.target.id === "ps2") {
        updateImage(im2, selectedOption);
    }
    if (event.target.id === "ps3") {
        updateImage(im3, selectedOption);
    }
}
function updateImage(imageElement, selectedOption) {
    if (selectedOption === "opcao1") {
        imageElement.src = "Carne moida.webp";
    } else if (selectedOption === "opcao2") {
        imageElement.src = "queijo.webp";
    } else if (selectedOption === "opcao3") {
        imageElement.src = "Azeitonas.jpg";
    }
}
function initializeImages() {
    var sel1 = document.getElementById("ps1");
    var sel2 = document.getElementById("ps2");
    var sel3 = document.getElementById("ps3");
    sel1.value = "opcao1";
    sel2.value = "opcao2";
    sel3.value = "opcao3";
    updateImage(im1, sel1.value);
    updateImage(im2, sel2.value);
    updateImage(im3, sel3.value);
}
initializeImages();
var sel1 = document.getElementById("ps1");
var sel2 = document.getElementById("ps2");
var sel3 = document.getElementById("ps3");

sel1.addEventListener("change", handleSelectChange);
sel2.addEventListener("change", handleSelectChange);
sel3.addEventListener("change", handleSelectChange);

function volta(){
        window.open("http://127.0.0.1:5500/index.htm", "_self");
}
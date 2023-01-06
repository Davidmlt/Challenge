function encriptar(){
    var texto = document.getElementById("input-principal").value.toLowerCase();
    var cifrado = texto.replace(/e/igm,"enter");
    var cifrado = cifrado.replace(/o/igm,"over");
    var cifrado = cifrado.replace(/i/igm,"imes");
    var cifrado = cifrado.replace(/a/igm,"ai");
    var cifrado = cifrado.replace(/u/igm,"ufat");

    document.getElementById("munieco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("input-secundario").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("input-principal").value.toLowerCase();
    var cifrado = texto.replace(/enter/igm,"e");
    var cifrado = cifrado.replace(/over/igm,"o");
    var cifrado = cifrado.replace(/imes/igm,"i");
    var cifrado = cifrado.replace(/ai/igm,"a");
    var cifrado = cifrado.replace(/ufat/igm,"u");

    document.getElementById("munieco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("input-secundario").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var txt = document.querySelector("#input-secundario");
    txt.select();
    document.execCommand("copy");
    alert("Se copio");
}
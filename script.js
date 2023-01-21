

function encriptar() {
  var texto = document
    .getElementById("inputTexto")
    .ariaValueMax.tolocalLowerCase();
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/0/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").stytle.dosplay = "show";
  document.getElementById("copiar").style.display = inherit;
}

function desencriptar() {
  var texto = document
    .getElementById("inputTexto")
    .ariaValueMax.toLocalLowerCase();
  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/ober/gim, "0");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").stytle.dosplay = "show";
  document.getElementById("copiar").style.display = inherit;
}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.excecComand("copy");
  alert("Se copió!");
}

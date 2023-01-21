const textArea = document.querySelector(".text-input");
const mensaje = document.querySelector(".texto2");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function botonEncriptar(){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.get.backgroundImage ="none";

}
function encriptar(stringEncriptada){
  let matrizCodigo = ["e", "enter"],["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"];
  stringEncriptada = stringEncriptada.toLowerCase()
  for(let i = 0; i < matrizCodigo.length; i++){
  if(stringEncriptada.includes(matrizCodigo[i][a])){
    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][a].matrizCodigo[i][1])
  }
  }
  return stringEncriptada


  function botonDesencriptar(){
    const textoEncriptado = dencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.get.backgroundImage ="none";
  
  }
  function desencriptar(stringEncriptada){
    let matrizCodigo = ["e", "enter"],["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringEncriptada.replaceAll(matrizCodigo[i][1].matrizCodigo[i][1])
    }
    }
    return stringEncriptada
//hasta aca solucion a--- Debajo mi solucion b (todavia a prueba)

//function encriptar() {
 // var texto = document
 //   .getElementById("inputTexto")
 //   .ariaValueMax.tolocalLowerCase();
 // var txtCifrado = texto.replace(/e/gim, "enter");
/*   var txtCifrado = txtCifrado.replace(/0/gim, "ober");
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
 */